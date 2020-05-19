import React from 'react';
import marked from 'marked';
import Media from '../styles/Media';
import moment from 'moment';

export default class EventsList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            events: []
        };
    }

    componentDidMount() {
        // value of 1 indicates 1 month from the current date (ex: Jan 5 - Feb 5)
        // 2 would be 2 months from the current date (ex Jan 5 - Mar 5), etc...
        // A value of zero should not be used as that would, in theory, just get events for the current day
        const MONTHS_FROM_NOW = 2

        let now = moment()
        let nowAccountedForFutureMonths = moment().add(MONTHS_FROM_NOW, 'months')

        //for more info on google calendar api visit https://developers.google.com/calendar/v3/reference/events/list 
        //NOTE: Since we are using an api key, you need to append ?key=API_KEY, to the end of the GET HTTP request
        const API_KEY = 'AIzaSyCRaaVrCuYAnOsW5wcdVDV8GUFgasLnK7o'
        const CALENDAR_ID = 'shkmbft44mds4g3ngvjfl3cffk@group.calendar.google.com'
        let calendar_api_url = `https://www.googleapis.com/calendar/v3/calendars/${CALENDAR_ID}/events?key=${API_KEY}`

        //only show events with end times after today
        calendar_api_url += `&timeMin=${now.toISOString()}`

        //only show events with start times within the next MONTHS_FROM_NOW
        calendar_api_url += `&timeMax=${nowAccountedForFutureMonths.toISOString()}`

        // count each recurring event as its own separate instance
        calendar_api_url += `&singleEvents=true`

        // getting the results in the current time zone of client NOTE: this does not seem to work on all day events
        calendar_api_url += `&timeZone=${Intl.DateTimeFormat().resolvedOptions().timeZone}`

        fetch(calendar_api_url)
            .then(response => response.json()) // parse JSON from request
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        events: result.items
                    });
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }

    render() {
        const { error, isLoaded, events } = this.state;
        if (error) {
            return <div style={{ textAlign: 'center' }}>Error: {error.message}</div>;
        }
        else if (events === undefined) {
            return <div style={{ textAlign: 'center' }}>Error: Events is undefined</div>;
        }
        else if (!isLoaded) {
            return <div style={{ textAlign: 'center' }}>Loading...</div>;
        }
        else if (events.length === 0) {
            return <div style={{ textAlign: 'center' }}>There are no events planned right now.</div>;
        }
        else {
            // sorting events from earliest to latest start time
            events.sort((a, b) => { return getStartTime(a).subtract(getStartTime(b)) })
            return (
                <div>
                    {/* Mobile Display */}
                    <div css={{
                        display: 'none',
                        [Media.phone]: {
                            display: 'inline',
                        }
                    }}>
                        {events.map((event, eventIndex) => {

                            return (

                                <div key={eventIndex} css={{
                                    paddingBottom: '1rem',
                                }}>

                                    <div css={{
                                        fontWeight: 'bold',
                                        fontSize: '1.25rem',
                                        textAlign: 'center',
                                        paddingBottom: '.5rem'
                                    }}>
                                        {getTitle(event)}
                                    </div>

                                    <div css={{
                                        textAlign: 'center',
                                        fontStyle: 'italic',
                                        paddingBottom: '.5rem',
                                    }}>
                                        {getTimeText(event, true)}
                                    </div>

                                    <div css={{ textAlign: 'center' }} dangerouslySetInnerHTML={{ __html: getShortDescription(event) }} ></div>

                                </div>

                            );

                        })}

                    </div>



                    {/* Desktop Display */}
                    <table css={{
                        display: 'center',
                        [Media.phone]: {
                            display: 'none'
                        }
                    }}>

                        <thead>
                            <tr>
                                <th style={{ width: '30%' }}>Date</th>
                                <th style={{ width: '25%' }}>Name</th>
                                <th style={{ width: '45%' }}>Description</th>
                            </tr>
                        </thead>

                        <tbody>
                            {events.map((event, eventIndex) => {
                                return (
                                    <tr key={eventIndex}>
                                        <td css={{ verticalAlign: 'top' }} >{getTimeText(event, false)}</td>
                                        <td css={{ verticalAlign: 'top' }}>{getTitle(event)}</td>
                                        <td dangerouslySetInnerHTML={{ __html: marked(getFullDescription(event)) }} ></td>
                                    </tr>
                                )
                            })
                            }
                        </tbody>

                    </table>


                </div >

            );
        }
    }
}

// Events helper functions to help parse return events from Google Calendar API call

function getEndTime(event) {
    let date = event.end.date || event.end.dateTime
    let dateMoment = moment(date)

    // we need to subtract a day from all day events since Google returns the end date of an all day event as the next date
    // for example, if a single all day event started on Jan 1 and ended on Jan 2, then Google would return an end date of Jan 3
    if (allDayEvent(event)) {
        dateMoment.subtract(1, 'day')
    }

    return dateMoment
}

function getStartTime(event) {
    let date = event.start.date || event.start.dateTime
    return moment(date)
}

function getTitle(event) {
    return event.summary
}

function getDescription(event) {
    return event.description
}

function allDayEvent(event) {
    return event.end.date !== undefined
}

function multiAllDayEvent(event) {
    return (allDayEvent(event) && !isOneDayEvent(event))
}

function isOneDayEvent(event) {
    let start = getStartTime(event)
    let end = getEndTime(event)
    return (end.isSame(start, 'day'))
}

function getTimeText(event, includeHoursAndMinutes) {
    let start = getStartTime(event)
    let end = getEndTime(event)
    let timeText = ''

    // if it is an all day event that spans multiple days
    if (multiAllDayEvent(event)) {
        timeText += `${start.format('MMMM D')} - ${end.format('MMMM D')}`
    }
    // if it is just a one day long event
    else if (allDayEvent(event)) {
        timeText += `${start.format('MMMM D')}`
    }
    // if it has a specified start and end time, then use those
    else {
        if (includeHoursAndMinutes) {
            // if the event is only one day long, then don't repeat the month and day on the end time
            if (isOneDayEvent(event)) {
                timeText += `${start.format('MMMM D LT')} - `
                timeText += `${end.format('LT')}`
            }
            else {
                timeText += `${start.format('MMMM D LT')} - ${end.format('MMMM D LT')}`
            }
        }
        else {
            timeText += `${start.format('MMMM D')}`
        }
    }

    return timeText

}

function getShortDescription(event) {
    let shortDescription = getDescription(event)

    // if the event has a description, include it
    if (shortDescription) {
        return shortDescription
    }
    return ""
}

function getFullDescription(event) {
    let fullDescription = ``
    let title = getTitle(event)

    fullDescription += `<span style="font-weight: bold">${title}</span><br />`
    fullDescription += `<span style="font-style: italic">${getTimeText(event, true)}</span><br />`
    fullDescription += `${getShortDescription(event)}<br />`

    return fullDescription
}

