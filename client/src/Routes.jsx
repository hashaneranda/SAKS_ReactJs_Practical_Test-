import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Job from './views/Job';
import Candidate from './views/Candidate';
import Search from './views/Search';
import Chat from './views/Chat';




export default class Routes extends Component {
  render() {
    return (
      <Switch>
        <Redirect exact from="/" to="/job"/>
        <Route component={Job} exact path="/job"/>
        <Route component={Candidate} exact path="/candidate"/>
        <Route component={Search} exact path="/search"/>
        <Route component={Chat} exact path="/chat"/>
       

      </Switch>
    );
  }
}
