import React from 'react';
import SectionHeading from '../shared/SectionHeading.js';
import * as BaseClasses from '../styles/BaseClasses';
import FormElement from '../shared/FormElement.js';

const elementWidth = '350px';

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

export default class ContactUsSection extends React.Component {

  render() {
    return (
      <div className={`${BaseClasses.container}`} css={{
        padding: '0rem 1rem 2rem',
      }}>

        <SectionHeading>CONTACT US</SectionHeading>

        <form
          action="https://formspree.io/evchurchwebsite@gmail.com"
          method="post"
          css={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            marginBottom: 0,
          }}
        >

          <FormElement label="Name" width={elementWidth}>

            <input type="text" name="name" css={{width: '100%'}} className={`${BaseClasses.inputStyle}`} />

          </FormElement>

          <FormElement label="Email" width={elementWidth}>

            <input type="text" name="email" css={{width: '100%'}} className={`${BaseClasses.inputStyle}`} />

          </FormElement>

          <FormElement label="Phone" width={elementWidth}>

            <input type="text" name="phone" css={{width: '100%'}} className={`${BaseClasses.inputStyle}`} />

          </FormElement>

          <FormElement label="Message" width={elementWidth}>

            <textarea name="message" css={{width: '100%', height: '10rem'}} className={`${BaseClasses.inputStyle}`} />

          </FormElement>

          <button type="submit" className={`${BaseClasses.primaryButton}`}>
            Send Message
          </button>

        </form>

      </div>
    )
  }
}