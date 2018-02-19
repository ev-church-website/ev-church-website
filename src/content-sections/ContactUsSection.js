import React from 'react';
import SectionHeading from '../shared/SectionHeading.js';
import * as BaseClasses from '../styles/BaseClasses';
import FormElement from '../shared/FormElement.js';

const elementWidth = '400px';


function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

export default class ContactUsSection extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value});
  };

  handleSubmit = e => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...this.state })
    })
      .then(() => alert("Success!"))
      .catch(error => alert(error));

    e.preventDefault();
  };

  render() {
    return (
      <div className={`${BaseClasses.container}`} css={{
        padding: '0rem 1rem 2rem',
      }}>

        <SectionHeading>CONTACT US</SectionHeading>

        <form
          name="contact"
          method="post"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          css={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
          onSubmit={this.handleSubmit}
        >

          <p hidden>
            <input name="bot-field" onChange={this.handleChange}/>
          </p>

          <FormElement label="Name" width={elementWidth}>

            <input type="text" name="name" css={{width: '100%'}} onChange={this.handleChange}/>

          </FormElement>

          <FormElement label="Email" width={elementWidth}>

            <input type="text" name="email" css={{width: '100%'}} onChange={this.handleChange}/>

          </FormElement>

          <FormElement label="Phone" width={elementWidth}>

            <input type="text" name="phone" css={{width: '100%'}} onChange={this.handleChange}/>

          </FormElement>

          <FormElement label="Message" width={elementWidth}>

            <textarea name="message" css={{width: '100%', height: '10rem'}} onChange={this.handleChange}/>

          </FormElement>

          <button type="submit">Send</button>

        </form>

      </div>
    )
  }
}