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

        <br />

        <p>
          Bible classes are designed to be age specific with a focus on learning God's word as a group and applying it to our lives.
        </p>

        <br />

        <p>
          Everyone is encouraged to participate and ask questions (before, during, and after class) to promote a better understanding of God’s will.
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

          Nursery (0-2 years)<br />
          Toddlers (2-4 years)<br />
          Preschool (Kindergarten - 1st Grade)<br />
          Elementary (2nd - 6th Grade)<br />
          Teens (11 years to High School)<br />
          Adults

        </div>

        <br />

        <div>

          <div css={{fontWeight: 'bold'}}>
            Sunday Evening Classes
          </div>

          Nursery (0-2 years)<br />
          Adults

        </div>

        <br />

        <div>

          <div css={{fontWeight: 'bold'}}>
            Wednesday Night Classes
          </div>

          Nursery (0-2 years)<br />
          Toddlers (2-4 years)<br />
          Preschool (Kindergarten - 1st Grade)<br />
          Elementary (2nd - 6th Grade)<br />
          Adults

        </div>

      </div>

    </div>
  )
}