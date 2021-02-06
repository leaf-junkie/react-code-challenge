import React from 'react';
import ReactDOM from 'react-dom';
import Form from './../Form';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

it ('renders without crashing', ()=> {
    const section = document.createElement('section');
    ReactDOM.render(<Form></Form>, section);
});

it ('renders form correctly', () => {
    const {getByTestId} = render(<Form></Form>);
    expect(getByTestId('form')).toBeInTheDocument();
});