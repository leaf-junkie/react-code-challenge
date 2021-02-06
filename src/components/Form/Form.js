import React from 'react';
import './Form.css';

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: '' };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        console.log(`New message received: ${this.state.value}`);
        event.preventDefault();
    }

    render() {
        return (
            <section className='container'>
                <form onSubmit={this.handleSubmit} className='form' autoComplete='off'>
                    <h2>Say Hello</h2>

                    <label for='name'>Name <span>*</span></label>
                    <input type='text' id='name' name='name' autoFocus required aria-describedby='name'/>

                    <label for='email'>Email <span>*</span></label>
                    <input type='text' id='email' name='email' required aria-describedby='email'/>

                    <label for='message'>Message <span>*</span></label>
                    <textarea id='message' name='message' rows={10} maxLength='300' required aria-describedby='message'/>

                    <input type='submit' id='submitBtn' value='Submit'/>

                </form>            
            </section>
        );
    }
}

export default Form;









