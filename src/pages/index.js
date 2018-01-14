import React from 'react';
import Link from 'gatsby-link';
import { containerStyle } from '../styles/base';
import Tile from '../shared/Tile.js';
import ScriptureLink from '../shared/ScriptureLink.js';
import SectionHeading from '../shared/SectionHeading.js';
import congregation from '../../static/congregation.jpg';
import { Helmet } from 'react-helmet';

export default () =>
<div>

  <Helmet>

    <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>

  </Helmet>

  <script dangerouslySetInnerHTML={{ __html:
    `if (window.netlifyIdentity) {
		  window.netlifyIdentity.on("init", user => {
			  if (!user) {
				  window.netlifyIdentity.on("login", () => {
					  document.location.href = "/admin/";
				  });
			  }
		  });
	  }`
  }}/>


  <div>

    <div css={[{}, containerStyle]}>

      <img css={{marginBottom: 0}} src={congregation} />

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
      <br />
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

  <div css={{
    backgroundColor: '#eee',
    marginTop: '3rem'
  }}>


    <SectionHeading>JOIN US</SectionHeading>


    <div css={[{
      display:'flex',
      flexWrap:'wrap'
    },containerStyle]}>


      <Tile title="When?" width="50%">

        <div css={{
          fontSize: '1.25rem',
          margin: '1rem auto',
          textAlign: 'left',
          maxWidth: '200px'
        }}>

          <div css={{fontWeight: 'bold'}}>Sunday Morning</div>
          <div>9:00am - Bible Study</div>
          <div>10:00am - Worship</div>

          <br />

          <div css={{fontWeight: 'bold'}}>Sunday Evening</div>
          <div>6:00pm - Worship</div>

          <br />

          <div css={{fontWeight: 'bold'}}>Wednesday Evening</div>
          <div>7:00pm - Bible Study</div>

        </div>

      </Tile>

      <Tile title="Where?" width="50%">


        <div css={{fontSize: '1.25rem', margin: '1rem'}}>

          8465 Crawfordsville Rd
          <br />
          Indianapolis, IN 46234

        </div>

        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3064.8286554366746!2d-86.3138409487439!3d39.81083510008708!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x886ca910b9db3395%3A0x64efa476da220592!2sEagle+Valley+Church+of+Christ!5e0!3m2!1sen!2sus!4v1512880124863" width="300" height="300" frameBorder="0" style={{border:0}} allowFullScreen></iframe>

      </Tile>

    </div>


  </div>


</div>
