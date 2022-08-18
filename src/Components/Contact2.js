import React from 'react'
import './Contact.css'
import Title from './Title'
import $ from 'jquery';

var telegram_bot_id = "5333532596:AAGG5FaNGoEc-e78ES23bL1DX3gK8mIZCdU";
var chat_id = 1788019123;
var u_name, email, message;
var ready = function () {
    u_name = document.getElementById("name").value;
    email = document.getElementById("email").value;
    message = document.getElementById("message").value;
    message = "Name: " + u_name + "\nEmail: " + email + "\nMessage: " + message;
};

var sender = function () {
    ready();
    
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://api.telegram.org/bot" + telegram_bot_id + "/sendMessage",
        "method": "POST",
        "headers": {
            "Content-Type": "application/json",
            "cache-control": "no-cache"
        },
        "data": JSON.stringify({
            "chat_id": chat_id,
            "text": message
        })
    };
    $.ajax(settings).done(function (response) {
        console.log(response);
    });
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("message").value = "";
    return false;
};


function Contact() {
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
    <form action="" onSubmit='return sender()'>
       <div className="formContent">
        <h2>Connect With Us to Partner:</h2>
        <hr></hr><br></br>
        <span>Full Name</span>
        <br />
        <input type="text" className="input100" name="name" id="name" required/>
        <br />
        <span>Phone Number</span>
        <br />
        <input type="text" className="input100" name="phone" required/>
        <br />
        <span>Enter Email</span>
        <br/>
        <input type="text" className="input100"  name="email" id="email" required />
        <br />
       </div>
       <div className ="formContent">
        <span>Message</span>
        <br />
        <textarea name="message" id="message" required></textarea>
        <br />
        
        <div className="row">

        <button>Get in touch</button>
        </div>
       </div>
       
        </form>
        
        </div>
        </section>
  );
}


export default Contact