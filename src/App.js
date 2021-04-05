import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Nav from './components/Nav'
import Footer from './components/Footer'

class App extends Component {
  render() {
    return (
      <Router>
        <Nav />
        <Switch>
        
        </Switch>
        <Footer />
      </Router>
    );
  }
}

export default App;
