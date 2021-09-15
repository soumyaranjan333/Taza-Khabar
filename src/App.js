import './App.css';

import React, { Component } from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

class App extends Component {
  pageSize=8
  render() {
    return (
      <div>
        <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
          <News key="general" pageSize={this.pageSize} country="in" category="general"/>
          </Route>
          <Route exact path="/business">
          <News key="business" pageSize={this.pageSize} country="in" category="business"/>
          </Route>
          <Route exact path="/entertainment">
          <News key="entertainment" pageSize={this.pageSize} country="in" category="entertainment"/>
          </Route>
          <Route exact path="/healthscience">
          <News key="healthscience" pageSize={this.pageSize} country="in" category="healthscience"/>
          </Route>
          <Route exact path="/sports">
          <News key="sports" pageSize={this.pageSize} country="in" category="sports"/>
          </Route>
          <Route exact path="/technology">
          <News key="technology" pageSize={this.pageSize} country="in" category="technology"/>
          </Route>  
        </Switch>
        </Router>
      </div>
    )
  }
}

export default App
