import React from 'react';
import PizzaLeft from '../images/pizzaleft.jpg';
import '../styles/Contact.css';
const Contact = () => {
    return (
        <div className='contact'>
            <div className='leftSide' style={{backgroundImage:`url(${PizzaLeft})`}}></div>
            <div className='rightSide'>
                <h1>CONTACT US</h1>
                <form id="contact-form" method='POST'>
                    <label htmlFor="name">Full name</label>
                    <input type="text" name='name' placeholder='Enter Full Name'/>
                    <label htmlFor="email">Email</label>
                    <input type="email" name='email' placeholder='Enter Email'/>
                    <label htmlFor="message">Message</label>
                    <textarea name="message" id="" cols="30" rows="6" placeholder='Enter message' required></textarea>
                    <button type='submit'>Send Message</button>
                </form>
            </div>
        </div>
    );
};

export default Contact;