import React, { useRef } from 'react';
import './Contact.css'
import Title from './Title'
import $ from 'jquery';

import emailjs from '@emailjs/browser';


function Contact() {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_9y4t1jb', 'template_lonznfh', form.current, 'jUn1z-vodKfQLijZ7')
        .then((result) => {
            console.log(result.text);
            console.log("message sent")
        }, (error) => {
            console.log(error.text);
        });
    };
    return (
      <section id='contact'>
      <div className="title-con" >
                  <Title
                      name={'Contact'}
                      subtext="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut ratione atque blanditiis at, 
                          nihil nemo necessitatibus dignissimos nisi repellat quasi! Unde molestias tenetur at?"
                  />
              </div>
      <div className='form'>
      <script src="/sender.js"></script>
      <script src="/form.js"></script>
      <form ref={form} onSubmit={sendEmail}>
         <div className="formContent">
          <h2>Say Hello</h2>
          <span>Full Name</span>
          <br />
          <input type="text" className="input100" name="user_name" id="name" required/>
          <br />
          <span>Phone Number</span>
          <br />
          <input type="text" className="input100" name="phone" required/>
          <br />
          <span>Enter Email</span>
          <br/>
          <input type="text" className="input100"  name="user_email" id="email" required />
          <br />
         </div>
         <div className ="formContent">
          <span>Message</span>
          <br />
          <textarea name="message" id="message" required></textarea>
          <br />
          <button type='submit'>SUBMIT</button>
          <div className="row"></div>
         </div>
          </form>

          </div>
          </section>
    );
  }
export default Contact



