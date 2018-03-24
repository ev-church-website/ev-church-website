import React from 'react';
import SectionHeading from '../shared/SectionHeading.js';
import * as BaseClasses from "../styles/BaseClasses";
import MessageCard from '../shared/MessageCard';
import class1Image from '../../static/class1.png';
import Media from '../styles/Media';

export default function ClassesSection({ data }) {
  return (
    <div className={`${BaseClasses.container}`} css={{
      padding: '0rem 1rem 2rem'
    }}>

      <SectionHeading>Classes</SectionHeading>


      <MessageCard justification="left" image={class1Image}>

        <p>
          At Eagle Valley Church of Christ we offer many different classes for all ages.
          All of the classes here at Eagle Valley focus on learning God’s word as a group.
        </p>

        <p>
          We encourage everyone to comment and ask questions (before, during, and after class), so that everyone can gain a better understanding of God’s will.
        </p>

        <p>
          In each class we also tailor the content to the specific age group so that each individual can implement God’s word into their life.
        </p>

      </MessageCard>

      <div css={{
        display: 'flex',
        justifyContent: 'space-around',
        [Media.phone]: {
          flexFlow: 'column',
          textAlign: 'center',
        }
      }}>

        <div>

          <div css={{fontWeight: 'bold'}}>
            Sunday Morning Classes
          </div>

          <div css={{fontStyle: 'italic'}}>
            9:00am - 9:45am
          </div>

          Nursery (0-2 years)<br />
          Toddlers (2-4 years)<br />
          Preschool (Kindergarten - 1st grade)<br />
          Elementary (2nd - 6th grade)<br />
          Teens (11 years to high school)<br />
          Adults

        </div>

        <br />

        <div>

          <div css={{fontWeight: 'bold'}}>
            Sunday Evening Classes
          </div>

          <div css={{fontStyle: 'italic'}}>
            6:00pm - 6:45pm
          </div>

          Nursery (0-2 years)<br />
          Adults

        </div>

        <br />

        <div>

          <div css={{fontWeight: 'bold'}}>
            Wednesday Night Classes
          </div>

          <div css={{fontStyle: 'italic'}}>
            7:00pm - 7:45pm
          </div>

          Nursery (0-2 years)<br />
          Toddlers (2-4 years)<br />
          Preschool (Kindergarten - 1st grade)<br />
          Elementary (2nd - 6th grade)<br />
          Adults

        </div>

      </div>

    </div>
  )
}