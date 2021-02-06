import React from 'react';
import './Form.css';

class Form extends React.Component {
    // Set the initial state
    state = {
        fname: '',
        email: '',
        message: ''
    };

    handleInputChange = event => {
        // Get the value and name of the input that triggered the change
        const { fname, value } = event.target;
    
        // Update the input's state
        this.setState({
            [fname]: value
        });
    };
    
    handleFormSubmit = event => {
        event.preventDefault();
        console.log(`New message received
            \n-----------------------------
            \nName: ${this.state.fname} 
            \nEmail: ${this.state.email} 
            \nMessage: ${this.state.message}`
        );

        // Clear form
        this.setState({
            fname: '',
            email: '',
            message: ''
        });
    };

    render() {
        return (
            
            <section className='container'>
                <form 
                onSubmit={this.handleFormSubmit} 
                className='form' 
                autoComplete='off'
                data-testid='form'
            >
                    <h2>Say Hello</h2>

                    <label htmlFor='fname'>Name <span>*</span></label>
                    <input 
                        value={this.state.fname}
                        fname='fname'
                        onChange={this.handleInputChange}
                        type='text' 
                        id='fname' 
                        aria-describedby='fname'
                        autoFocus
                        required 
                    />

                    <label htmlFor='email'>Email <span>*</span></label>
                    <input
                        value={this.state.email}
                        name='email' 
                        onChange={this.handleInputChange}
                        type='text' 
                        id='email' 
                        aria-describedby='email'
                        required 
                    />

                    <label htmlFor='message'>Message <span>*</span></label>
                    <textarea 
                        value={this.state.message}
                        onChange={this.handleInputChange}
                        name='message' 
                        id='message' 
                        aria-describedby='message'
                        maxLength='300' 
                        rows={10} 
                        required 
                    />

                    <input type='submit' id='submitBtn' value='Submit'/>

                </form>            
            </section>
        );
    }
}

export default Form;
