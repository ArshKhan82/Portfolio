//import React, { useState } from "react";
import "./Contact.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import mail_icon from "../../assets/mail_icon.svg";
import location_icon from "../../assets/location_icon.svg";
import call_icon from "../../assets/call_icon.svg";
import { useState } from "react";

function Contact() {
   const [setResult] = useState("");

   const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);

      formData.append("access_key", "2af193c1-bd26-473a-a171-a5fc3412ac54");

      const response = await fetch("https://api.web3forms.com/submit", {
         method: "POST",
         body: formData,
      });

      const data = await response.json();

      if (data.success) {
         alert("Message Submitted Successfully");
         event.target.reset();
      } else {
         alert("Error", data);
         setResult(data.message);
      }
   };

   return (
      <div id="contact" className="contact">
         <div className="contact-title">
            <h1>Get in touch</h1>
            <img src={theme_pattern} alt="Contact-section-error1" />
         </div>
         <div className="contact-section">
            <div className="contact-left">
               <h1>Let&apos;s talk</h1>
               <p>
                  I&apos;m currently available to take on new projects, so feel
                  free to
               </p>
               <div className="contact-details">
                  <div className="contact-detail">
                     <img src={mail_icon} alt="Contact-section-error2" />
                     <p>azizulhaque0715@gmail.com</p>
                  </div>
                  <div className="contact-detail">
                     <img src={call_icon} alt="Contact-section-error4" />
                     <p>+772-285-525</p>
                  </div>
                  <div className="contact-detail">
                     <img src={location_icon} alt="Contact-section-error3" />
                     <p>CA, United States</p>
                  </div>
               </div>
            </div>
            <form onSubmit={onSubmit} className="contact-right">
               <label htmlFor="name">Your Name</label>
               <input type="text" placeholder="Enter your Name" name="name" />
               <label htmlFor="email">Your Email</label>
               <input
                  type="email"
                  placeholder="Enter your email"
                  name="email"
               />
               <label htmlFor="text">Write your message here</label>
               <textarea
                  rows={5}
                  name="message"
                  placeholder="Enter your message"></textarea>
               <button className="contact-submit" type="submit">
                  Submit Now
               </button>
            </form>
         </div>
      </div>
   );
}

export default Contact;
