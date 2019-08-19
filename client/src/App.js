
import React, { Component } from 'react';


//importing template components
import Footer from './components/template/footer';
import Sidemenu from './components/template/sidemenu';
import Nav from './components/template/nav';

//importing router view
import Router from './router/router';


export class App extends Component {
    render() {
        return (
            <div>
                    {/* Page Wrapper */}
                    <div id="wrapper">
                    <Sidemenu />
                    {/* Content Wrapper */}
                    <div id="content-wrapper" className="d-flex flex-column">
                        {/* Main Content */}
                        <div id="content">

                        <Nav />


                        <Router />


                        {/* /.container-fluid */}
                        </div>
                        {/* End of Main Content */}
                       <Footer />
                    </div>
                    {/* End of Content Wrapper */}
                    </div>
                    {/* End of Page Wrapper */}
            </div>

        );
    }
}

export default App;
