import React from 'react';
import SectionHeading from '../shared/SectionHeading.js';
import * as BaseClasses from '../styles/BaseClasses';
import FormElement from '../shared/FormElement.js';

const elementWidth = '400px';

export default ({ data }) => {
  return (
    <div className={`${BaseClasses.container}`} css={{
      padding: '0rem 1rem 2rem',
    }}>

      <SectionHeading>CONTACT US</SectionHeading>

      <form name="contact" method="post" data-netlify="true" css={{
        display:'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}>

        <FormElement label="Name" width={elementWidth}>

          <input type="text" name="name" css={{width:'100%'}} />

        </FormElement>

        <FormElement label="Email" width={elementWidth}>

          <input type="text" name="email" css={{width:'100%'}} />

        </FormElement>

        <FormElement label="Phone" width={elementWidth}>

          <input type="text" name="phone" css={{width:'100%'}} />

        </FormElement>

        <FormElement label="Message" width={elementWidth}>

          <textarea name="message" css={{width:'100%', height: '10rem'}} />

        </FormElement>

        <button type="submit">Send</button>

      </form>

    </div>
  )
}