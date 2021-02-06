import React from 'react';
import './Form.css';

const validateName = (name) => {
    if (name.trim() === '') 
        return 'Please enter your name.';
    
    if (/[^a-zA-Z -]/.test(name)) 
        return 'Please only use letters and hyphens. Numbers and special characters are not allowed.';
      
    if (name.trim().length < 2) 
        return 'Name must be at least two characters.';
      
    return null;
}

const validateEmail = email => {
    if (/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email,)) 
        return null;
      
    if (email.trim() === '')
        return 'Please enter your email.';
      
    return 'Please enter a valid email address in the format: yourname@example.com.';
}

const validateMessage = message => {
    if (message.trim() === '')
        return 'Please enter a message.';
      
    return 'Please enter a message';
}

const validate = {
    name: name => validateName('', name),
    name: email => validateEmail('', email),
    name: message => validateMessage('', message)
}

const Form = (props) => {
    return (
        <section className='container'>
            <form action='#' className='form' autoComplete='off'>
                <h2>Say Hello</h2>

                <label for='name'>Name *</label>
                <input type='text' id='name' name='name' autoFocus required aria-describedby=''/>

                <label for='email'>Email *</label>
                <input type='text' id='email' name='email' required aria-describedby=''/>

                <label for='message'>Message *</label>
                <input type='textarea' id='message' name='message' rows={5} required aria-describedby=''/>

                <input type='submit' id='submitBtn' value='Submit'/>

            </form>            
        </section>
    );
}

export default Form;