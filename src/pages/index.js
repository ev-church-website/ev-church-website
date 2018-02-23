import React from 'react';
import * as BaseClasses from '../styles/BaseClasses';
import Tile from '../shared/Tile.js';
import ScriptureLink from '../shared/ScriptureLink.js';
import SectionHeading from '../shared/SectionHeading.js';
import congregation from '../../static/congregation.jpg';
import Colors from '../styles/Colors';
import EventsSection from '../content-sections/EventsSection.js';
import ContactUsSection from '../content-sections/ContactUsSection.js';
import { Helmet } from 'react-helmet';

export default class Index extends React.Component {

  render() {

    return (

      <div>

        <Helmet
          script={[{src: 'https://identity.netlify.com/v1/netlify-identity-widget.js', defer: true}]}
          onChangeClientState={(newState, addedTags) => {
            if (addedTags.scriptTags) {
              addedTags.scriptTags[0].onload = () => {

                if (window.netlifyIdentity) {

                  window.netlifyIdentity.on('init', user => {
                    if (!user) {
                      window.netlifyIdentity.on('login', () => {
                        document.location.href = '/admin/';
                      });
                    }
                  });

                }

              };
            }
          }}
        />

        <div>

          <div className={`${BaseClasses.container}`}>

            <img css={{marginBottom: 0}} src={congregation} />

          </div>

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

        <div id="events">

          <EventsSection data={this.props.data.allEventsJson.edges.map(edge => edge.node)}/>

        </div>

        <div id="contact" css={{backgroundColor: Colors.grayBackground}}>

          <ContactUsSection />

        </div>

      </div>

    );

  }
}


//TODO: break this up?
export const query = graphql`
  query AllDataQuery {
  
    allEventsJson {
      edges {
        node {
          title
          date
          description
        }
      }
    }
    
    
  }
`;
