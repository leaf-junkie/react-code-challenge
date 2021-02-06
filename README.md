# BYRDMR

This simple website is built using React via create-react-app. Routing is implemented through react-router-dom.

## Design choices
I chose to use the same orange from the logo as an accent color for this site. It shows up in the navigation links on hover, as the background color for important buttons, and is peppered throughout the contact form (input border, desaturated as input background, and to indicate required fields). 

I was originally going to use a photograph of a light blue sky with a few wispy clouds as a fullscreen background for the hero. I was still dissatisfied with the loading time, despite having compressed the image, so I went with a subtle linear gradient instead. I based my color selection for this gradient on the complimentary color of the orange from the provided logo.

I used what I consider to be some best practices when designing the form, such as 
- Asking for very little information
- Providing each input with a label that does not move
- Not including placeholders, as research has demonstrated that including placeholders in form fields is harmful (see https://www.nngroup.com/articles/form-design-placeholders/)
- Autofocusing the first input field upon rendering the contact form. 

## Unit tests
Jest was used to create two unit tests:
- To check if the Form component renders without crashing
- To check if the Form component exists in the DOM

To test, run the command npm test

I have also left a console log to show the values provided by the user in the form. Just open up the console and fill out the form.

## Running locally
To run this application in your local environment, you'll need to first clone the repo using `git clone https://github.com/leaf-junkie/react-code-challenge.git`.

Next, navigate to your newly cloned directory in the terminal. Once there, run `npm install` to install the dependencies.

To run the application, use the command `npm start` or `yarn add`.