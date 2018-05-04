import React from 'react';
import SectionHeading from '../shared/SectionHeading.js';
import * as BaseClasses from "../styles/BaseClasses";
import dateFormat from 'dateformat';
import marked from 'marked';
import Media from '../styles/Media';

export default ({ data }) => {
  return (
    <div className={`${BaseClasses.container}`} css={{
      padding: '0rem 1rem 2rem'
    }}>

      <SectionHeading>UPCOMING EVENTS</SectionHeading>

      <div css={{display: 'flex', justifyContent:'center', paddingBottom: '1rem'}}>
        <a
          className={`${BaseClasses.link}`}
          href="https://calendar.google.com/calendar/embed?src=shkmbft44mds4g3ngvjfl3cffk%40group.calendar.google.com&ctz=America%2FNew_York"
          target="_blank"
        >
          View in Google Calendar
        </a>
      </div>

      <div css={{
        display: 'none',
        [Media.phone]: {
          display: 'inline',
        }
      }}>
        {data.map((event, eventIndex) => {

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
                {event.title}
              </div>

              <div css={{
                textAlign: 'center',
                fontStyle: 'italic',
                paddingBottom: '.5rem',
              }}>
                {formatDate(event.date)}
              </div>

              <div dangerouslySetInnerHTML={{ __html: marked(event.description) }} ></div>

            </div>

          );

        })}

      </div>


      <table css={{
        display: 'inline',
        [Media.phone] : {
          display: 'none'
        }
      }}>

        <thead>
          <tr>
            <th style={{width: '150px'}}>Date</th>
            <th style={{width: '250px'}}>Name</th>
            <th style={{width: '500px'}}>Description</th>
          </tr>
        </thead>

        <tbody>
        {data.map((event, eventIndex) => {

          return (

            <tr key={eventIndex}>
              <td css={{verticalAlign: 'top'}}>{formatDate(event.date)}</td>
              <td css={{verticalAlign: 'top'}}>{event.title}</td>
              <td dangerouslySetInnerHTML={{ __html: marked(event.description) }} ></td>
            </tr>

          );

        })}
        </tbody>

      </table>

    </div>
  )
}

function formatDate(dateString) {

  var dateToFormat = new Date(dateString);

  if (dateToFormat.getHours() === 0) {

    return dateFormat(dateToFormat, "mmm d");

  } else {

    return dateFormat(dateToFormat, "mmm d h:MM TT");

  }

}