
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'

//importing template components
import Sidemenu from './template/sideMenu';
import Nav from './template/nav';
import Footer from './template/footer';

//importing router view
import Router from '../router/router';

export class Main extends Component {



    ComponentToHideSideMenue = (props) => {
        const { location } = props;
        if (location.pathname.match(/login/)){
          return null;
        }
      
        return (
            <Sidemenu />
        )
      }

    ComponentToHideSideNav = (props) => {
        const { location } = props;
        if (location.pathname.match(/login/)){
          return null;
        }
      
        return (
            <Nav />
        )
      }


    ComponentToHideSideFooter = (props) => {
        const { location } = props;
        if (location.pathname.match(/login/)){
          return null;
        }
      
        return (
            <Footer />
        )
      }


    render() {
        return (
            <div>
                 
                    <div id="wrapper">
                    {this.ComponentToHideSideMenue}
                
                    <div id="content-wrapper" className="d-flex flex-column">
                       
                        <div id="content">

                        {this.ComponentToHideSideNav}


                        <Router />


                      
                        </div>
                      
                      {this.ComponentToHideSideFooter}
                    </div>
                  
                    </div>
      
            </div>

        );
    }
}

if (document.getElementById('example')) {
    ReactDOM.render(
        <BrowserRouter>
            <Main />
        </BrowserRouter>

    , document.getElementById('example'));
}













