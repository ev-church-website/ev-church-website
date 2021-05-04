import React from 'react';
import * as BaseClasses from '../styles/BaseClasses';
import Tile from '../shared/Tile.js';
import ScriptureLink from '../shared/ScriptureLink.js';
import SectionHeading from '../shared/SectionHeading.js';
import congregation from '../../static/congregation.jpg';
import Colors from '../styles/Colors';
import EventsSection from '../content-sections/EventsSection.js';
import ContactUsSection from '../content-sections/ContactUsSection.js';
import ClassesSection from '../content-sections/ClassesSection';
import MissionsSection from '../content-sections/MissionsSection';
import AlertModal from '../content-sections/AlertModal';
import Media from '../styles/Media'

export default class Index extends React.Component {

  render() {

    return (

      <div>

        <AlertModal/>

        <div>

          <div css={{width: "100%"}}>

            <img css={{marginBottom: 0, width:'100%'}} src={congregation} />

          </div>

        </div>

        <div css={{
          display: 'none',
          [Media.phone]: {
            backgroundColor: Colors.grayBackground,
            display: 'flex',
            justifyContent: 'center',
            padding: '1rem',
            position: 'relative',
            top: -10,
          }
        }}>

          <a href="/focus-in" css={{color: Colors.linkBlue}}>
            Learn about the Focus (IN) Conference
          </a>

        </div>

        <div id="about">

          <SectionHeading>ABOUT US</SectionHeading>


          <div className={`${BaseClasses.container}`} css={{
            display:'flex',
            flexWrap:'wrap'
          }}>

            <Tile title="Our Mission and Approach" width="50%">
              Our goal, our motive, and our underlying reason for everything we do is to please God.
              Because it is only through His word that we can know what is truly pleasing to Him, you will find that we stress
              the importance of diligent Bible study on a consistent and ongoing basis.
              <br />
              (<ScriptureLink book="2 Corinthians" chapter="5" verse="9" />, &nbsp;
              <ScriptureLink book="Colossians" chapter="1" verse="9-10"/>)
              <br />
              <br />
              Because we believe God’s word to be the all-encompassing truth, we place great emphasis on searching the truth,
              speaking the truth, and living the truth in the spirit of love.
              (<ScriptureLink book="John" chapter="17" verse="17" />, &nbsp;
              <ScriptureLink book="Ephesians" chapter="4" verse="15"/>)
            </Tile>

            <Tile title="Our Worship Service" width="50%">
              Our worship services follow the God-approved New Testament pattern exhibited by the early church.
              We assemble on the first day of the week to proclaim our faith in Jesus Christ and to worship God.
              We sing songs of praise, pray to the Father, remember the sacrifice of His Son by partaking of the Lord’s Supper,
              give of our means, and learn more about Christ and God’s will through the study of the Bible.
            </Tile>

            <Tile title="Our Fellowship" width="50%">
              Building genuine relationships with one another is a critical part of our congregation’s strength and unity.
              Fellowship activities abound where we enjoy and gain encouragement from our time together.
            </Tile>

            <Tile title="Our Invitation" width="50%">
              Eagle Valley is a visitor-friendly congregation.  You will be made to feel welcome.
              Simply sit and listen; or, better yet, participate!  Right now is a great time to visit.  We hope to see you soon!
            </Tile>

          </div>

        </div>

        <div css={{
          backgroundColor: Colors.grayBackground,
          marginTop: '3rem'
        }}>


          <SectionHeading>JOIN US</SectionHeading>


          <div className={`${BaseClasses.container}`} css={{
            display:'flex',
            flexWrap:'wrap'
          }}>


            <Tile title="When?" width="50%">

              <div css={{
                fontSize: '1.25rem',
                margin: '1rem auto',
                textAlign: 'center',
                maxWidth: '300px'
              }}>

                <div css={{fontWeight: 'bold'}}>Sunday Morning</div>
                <div><s>9:00am - Bible Study</s></div>
                <div>10:00am - Worship</div>

                <br />

                <div css={{fontWeight: 'bold'}}>Sunday Evening</div>
                <div>6:00pm - Worship</div>

                <br />

                <div css={{fontWeight: 'bold'}}>Wednesday Morning</div>
                <div>10:30am - Ladies Bible Study</div>

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

        <div id="classes">

          <ClassesSection/>

        </div>

        <div id="missions" css={{backgroundColor: Colors.grayBackground}}>

          <MissionsSection/>

        </div>


        <div id="events">

          <EventsSection/>

        </div>

        <div id="contact" css={{backgroundColor: Colors.grayBackground}}>

          <ContactUsSection />

        </div>

      </div>

    );

  }
}