import React from 'react';
import SectionHeading from '../shared/SectionHeading.js';
import * as BaseClasses from "../styles/BaseClasses";
import dateFormat from 'dateformat';
import marked from 'marked';
import Media from '../styles/Media';
import EventsList from './EventsList.js';

export default () => {
  return (
    <div className={`${BaseClasses.container}`} css={{
      padding: '0rem 1rem 2rem'
    }}>

      <SectionHeading>UPCOMING EVENTS</SectionHeading>

      <div css={{ display: 'flex', justifyContent: 'center', paddingBottom: '1rem' }}>
        <a
          className={`${BaseClasses.link}`}
          css={{ margin: '0 1rem 0', textAlign: 'center' }}
          href="https://calendar.google.com/calendar/embed?src=shkmbft44mds4g3ngvjfl3cffk%40group.calendar.google.com&ctz=America%2FNew_York"
          target="_blank"
        >
          View in Google Calendar
        </a>
        <a
          className={`${BaseClasses.link}`}
          css={{ margin: '0 1rem 0', textAlign: 'center' }}
          href="https://calendar.google.com/calendar/b/0/r?cid=c2hrbWJmdDQ0bWRzNGczbmd2amZsM2NmZmtAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ"
          target="_blank"
        >
          Add to Google Calendar
        </a>
      </div>


      <EventsList />

    </div>
  )
}