import React from 'react';
import SectionHeading from '../shared/SectionHeading.js';
import * as BaseClasses from "../styles/BaseClasses";
import MessageCard from '../shared/MessageCard';
import class1Image from '../../static/class1.png';
import class2Image from '../../static/class2.png';

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
          In each class we also tailor the content to the specific age group so that each individual can implement God’s word into their life.

        </p>

      </MessageCard>

      <MessageCard justification="right" image={class2Image}>

        <p>

          Put times of classes and classes available here

        </p>

      </MessageCard>

    </div>
  )
}