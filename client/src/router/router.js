import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'


import Dashboard from '../components/dashboard'

import GamaWididya from '../components/GamaWidiya';
import GramaKottasaya from '../components/GramaKottasaya';
import UserData from '../components/UserData';

// The Main component renders one of the three provided
// Routes (provided that one matches). Both the /roster
// and /schedule routes will match any pathname that starts
// with /roster or /schedule. The / route will only match
// when the pathname is exactly the string "/"

export default class Router extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route exact path='/' component={Dashboard}/>
                    <Route path='/gamawidiya' component={GamaWididya}/>
                    <Route path='/gramaKottasaya' component={GramaKottasaya}/>
                    <Route path='/userData' component={UserData}/>

                </Switch>
            </div>
        );
    }
}

