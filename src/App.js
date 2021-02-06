import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import HomePage from './components/HomePage/HomePage';
import ContactPage from './components/ContactPage/ContactPage';
import './App.css';


class App extends Component {

  constructor() {
    super();

    this.state = {
      newMessage: false
    }
  }

  render() {
    return (
      <div className="App">
        <Router>
          <Nav/>
          <Switch>
            <Route exact path="/" component={() => <HomePage/>} />
            <Route exact path="/HomePage" component={() => <HomePage/>} />
            <Route exact path="/ContactPage" component={() => <ContactPage/> } />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
