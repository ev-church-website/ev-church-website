import React from 'react';
import SectionHeading from '../shared/SectionHeading.js';
import * as BaseClasses from "../styles/BaseClasses";

export default ({ data }) => {
  return (
    <div className={`${BaseClasses.container}`}>

      <SectionHeading>UPCOMING EVENTS</SectionHeading>

      <table>

        <thead>
          <tr>
            <th>Date</th>
            <th>Name</th>
            <th>Description</th>
          </tr>
        </thead>

        {data.map((event) => {

          console.dir(event);

          return (

            <tr>
              <td>{event.date}</td>
              <td>{event.title}</td>
              <td>{event.description}</td>
            </tr>

          );

        })}

      </table>

    </div>
  )
}