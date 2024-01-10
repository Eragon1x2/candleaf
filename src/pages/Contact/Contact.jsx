import React from 'react'
import './Contact.css'
function Contact() {
    return (
        <div className='contact'>
            <h1 className='product_title'>Contact us</h1>
            <p className='product_text'>if you have a question, you can ask our support</p>
            <form action="">
                <input type="email" name="email" id="" placeholder='Enter your email' />
                <textarea name="" id="" cols="30" rows="5" placeholder='Enter you question'></textarea>
                <button type='Submit'>Send</button>
            </form>
        </div>
    )
}

export default Contact
