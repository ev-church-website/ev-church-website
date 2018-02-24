import React from 'react';
import SectionHeading from '../shared/SectionHeading.js';
import * as BaseClasses from '../styles/BaseClasses';
import FormElement from '../shared/FormElement.js';
import update from 'immutability-helper';

const elementWidth = '350px';


function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

export default class ContactUsSection extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      isSubmitted: false,
      formData: this.getInitialFormData(),
    };
  }

  getInitialFormData = () => {

    return {
      name: '',
      email: '',
      phone: '',
      message: '',
    };

  };

  handleChange = (e) => {

    this.setState({formData: update(this.state.formData, {[e.target.name]: {$set: e.target.value}})});

  };

  handleSubmit = (e) => {

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...this.state.formData })
    })
      .then(this.handleSuccess)
      .catch(error => alert(error));

    e.preventDefault();
  };

  handleSuccess = () => {

    this.setState({
      isSubmitted: true,
      formData: this.getInitialFormData(),
    });

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
            marginBottom: 0,
          }}
          onSubmit={this.handleSubmit}
        >

          <p hidden>
            <input name="bot-field" onChange={this.handleChange}/>
          </p>

          <FormElement label="Name" width={elementWidth}>

            <input type="text" name="name" css={{width: '100%'}} value={this.state.formData.name} onChange={this.handleChange}/>

          </FormElement>

          <FormElement label="Email (optional)" width={elementWidth}>

            <input type="text" name="email" css={{width: '100%'}} value={this.state.formData.email}  onChange={this.handleChange}/>

          </FormElement>

          <FormElement label="Phone (optional)" width={elementWidth}>

            <input type="text" name="phone" css={{width: '100%'}} value={this.state.formData.phone} onChange={this.handleChange}/>

          </FormElement>

          <FormElement label="Message" width={elementWidth}>

            <textarea name="message" css={{width: '100%', height: '10rem'}} value={this.state.formData.message} onChange={this.handleChange}/>

          </FormElement>

          <div data-netlify-recaptcha></div>

          <button type="submit">Send</button>

          <div css={{
            paddingTop: '1rem',
            visibility: (this.state.isSubmitted ? 'visible' : 'hidden')
          }}>

            Thanks! We have received your message.

          </div>

        </form>

      </div>
    )
  }
}