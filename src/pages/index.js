import React from 'react';
import Link from 'gatsby-link';
import { containerStyle } from '../styles/base';
import Tile from '../shared/Tile.js';
import ScriptureLink from '../shared/ScriptureLink.js';
import SectionHeading from '../shared/SectionHeading.js';
import congregation from '../../static/congregation.jpg';

export default () =>
<div>


  <div>

    <div css={[{}, containerStyle]}>

      <img src={congregation} />

    </div>

  </div>


  <SectionHeading>ABOUT US</SectionHeading>


  <div css={[{
    display:'flex',
    flexWrap:'wrap'
  },containerStyle]}>

    <Tile title="Our Mission and Approach" width="50%">
      Our goal, our motive, and our underlying reason for everything we do is to please God.
      Because it is only through His word that we can know what is truly pleasing to Him, you will find that we stress
      the importance of diligent Bible study on a consistent and ongoing basis.
      (<ScriptureLink book="2 Corinthians" chapter="5" verse="9" />, &nbsp;
      <ScriptureLink book="Colossians" chapter="1" verse="9-10"/>)
    </Tile>

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

    <Tile title="Our Invitation" width="50%">
      The Eagle Valley Church of Christ is a visitor-friendly congregation’s strength and unity.
      We hold fellowship activities on a monthly basis where we enjoy and gain encouragement from our time together.
    </Tile>

  </div>


  <SectionHeading>JOIN US</SectionHeading>

  <div css={{
    height: '300px'
  }}>


  </div>


</div>
