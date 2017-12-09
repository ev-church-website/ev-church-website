import React from 'react';
import Link from 'gatsby-link';
import { containerStyle } from '../styles/base';
import Tile from '../shared/Tile.js';

export default () =>
<div css={containerStyle}>

  <div css={{
    fontSize: '2rem',
    height: '200px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }}>

    intro image

  </div>


  <div css={{
    display:'flex',
    flexWrap:'wrap'
  }}>

    <Tile title="Our Worship Service" width="50%">
      Our worship services follow the God-approved New Testament pattern exhibited by the early church.
      We assemble on the first day of the week to proclaim our faith in Jesus Christ and to worship God.
      We sing songs of praise, pray to the Father, remember the sacrifice of His Son by partaking of the Lord’s Supper,
      give of our means, and learn more about Christ and God’s will through the study of the Bible.
    </Tile>

    <Tile title="Our Fellowship" width="50%">
      Building genuine relationships with one another is a critical part of our congregation’s strength and unity.
      We hold fellowship activities on a monthly basis where we enjoy and gain encouragement from our time together.
    </Tile>

  </div>

</div>
