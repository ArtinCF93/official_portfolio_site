import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

import './about.css'

let ContactView = () => {
  let form = useRef();

  let sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_n9el0mq', 'template_dysjzjt', form.current, 'user_eV3xUwWIj93WfbDwVx5cv')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  };

  return (
    <div className='formContainer'>
    <h2>Contact Me</h2>
    <hr></hr>
    <form ref={form} onSubmit={sendEmail}>
    <br></br>
      <label>Name</label>
      <br></br>
      <input type="text" name="user_name" required/>
      <br></br>
      <br></br>
      <label>Email</label>
      <br></br>
      <input type="email" name="user_email" required/>
      <br></br>
      <br></br>
      <label>Telephone</label>
      <br></br>
      <input type="tel" pattern='\d{3}\d{3}\d{4}' name="user_telephone" required/>
      <br></br>
      <br></br>
      <label>Message</label>
      <br></br>
      <textarea name="message" required/>
      <br></br>
      <br></br>
      <button type="submit" value="Send" className='submitButton'>Submit</ button>
    </form>
    </div>
  );
};

export default ContactView