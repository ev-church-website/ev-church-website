import React from 'react';
import SectionHeading from '../shared/SectionHeading.js';
import * as BaseClasses from "../styles/BaseClasses";
import Tile from '../shared/Tile';

export default function MissionsSection({ data }) {
  return (
    <div className={`${BaseClasses.container}`} css={{
      padding: '0rem 1rem 2rem',
    }}>

      <SectionHeading>Missions and Outreach</SectionHeading>

      <div css={{display: 'flex',flexWrap:'wrap'}}>

        <Tile width="50%">

          <p>
            The members of Eagle Valley are committed and ever striving to focus
            our mission efforts toward the spread of the Gospel both locally and
            throughout the world.
          </p>

          <p>

            Here are some of the missions and outreach ministries we support.

          </p>

        </Tile>

        <Tile width="50%">
          <p>
            <a href="http://www.mnch.info/">Manuelito Navajo Children’s Home</a>
            <br />
            New Mexico
          </p>
          <p>
            <a href="https://www.shultslewis.org">Shults-Lewis Child and Family Services</a>
            <br />
            Valparaiso, Indiana
          </p>
          <p>
            <a href="http://disasterreliefeffort.org/">
              Churches of Christ Disaster Relief Effort
            </a>
            <br />
            Based in Nashville, Tennessee but work Nation Wide
          </p>
          <p>
            <a href="http://www.housetohouse.com/">
              House to House Heart to Heart
            </a>
          </p>

        </Tile>

      </div>

    </div>
  )
}