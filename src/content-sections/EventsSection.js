import React from 'react';
import SectionHeading from '../shared/SectionHeading.js';
import * as BaseClasses from "../styles/BaseClasses";
import dateFormat from 'dateformat';
import marked from 'marked';

export default ({ data }) => {
  return (
    <div className={`${BaseClasses.container}`} css={{
      padding: '0rem 1rem 2rem'
    }}>

      <SectionHeading>UPCOMING EVENTS</SectionHeading>

      <table>

        <thead>
          <tr>
            <th style={{width: '90px'}}>Date</th>
            <th style={{width: '210px'}}>Name</th>
            <th>Description</th>
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