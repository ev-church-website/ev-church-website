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

        <div css={{textAlign: 'center'}}>

          <p>
            The members of Eagle Valley are committed to focusing our mission efforts toward the spread of the Gospel both locally and throughout the world.
          </p>

          <p>
            Here are some of the mission and outreach ministries we support:
          </p>

        </div>

        <Tile width="50%">
          <a href="http://www.mnch.info/" target="_blank" className={`${BaseClasses.link}`}>
            Manuelito Navajo Children’s Home
          </a>
          <br />
          New Mexico
        </Tile>

        <Tile width="50%">
          <a href="https://www.shultslewis.org" target="_blank" className={`${BaseClasses.link}`}>
            Shults-Lewis Child and Family Services
          </a>
          <br />
          Valparaiso, Indiana
        </Tile>

        <Tile width="50%">
          <a href="http://disasterreliefeffort.org/" target="_blank" className={`${BaseClasses.link}`}>
            Churches of Christ Disaster Relief Effort
          </a>
          <br />
          Nationwide effort based in Nashville, TN
        </Tile>

        <Tile width="50%">
          <a href="http://www.housetohouse.com/" target="_blank" className={`${BaseClasses.link}`}>
            House to House Heart to Heart
          </a>
          <br />
          Outreach publication
        </Tile>

        <Tile width="50%">
          Veterans’ Hospital and House
          <br />
          Indianapolis, IN
        </Tile>

        <Tile width="50%">
          <a href="https://shelteringwings.org/" target="_blank" className={`${BaseClasses.link}`}>
            Sheltering Wings
          </a>
          <br />
          Danville, IN
        </Tile>

        <Tile width="50%">
          Teddy Bear Project
          <br />
          Indianapolis, IN
        </Tile>

      </div>

    </div>
  )
}