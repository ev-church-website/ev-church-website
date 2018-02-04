import React from 'react';
import SectionHeading from '../shared/SectionHeading.js';
import * as BaseClasses from "../styles/BaseClasses";
import dateFormat from 'dateformat';
import marked from 'marked';

export default ({ data }) => {
  return (
    <div className={`${BaseClasses.container}`} css={{
      paddingBottom: '2rem'
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

        {data.map((event) => {

          return (

            <tr>
              <td css={{verticalAlign: 'top'}}>{formatDate(event.date)}</td>
              <td css={{verticalAlign: 'top'}}>{event.title}</td>
              <td dangerouslySetInnerHTML={{ __html: marked(event.description) }} ></td>
            </tr>

          );

        })}

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