
import React, { Component } from 'react';
import { Link } from 'react-router-dom';


export default class Sidemenu extends Component {
    render() {
        return (
            <div>

        
                <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
            
                <a className="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
                <div className="sidebar-brand-icon rotate-n-15">
                    <i className="fas fa-laugh-wink" />
                </div>
                <div className="sidebar-brand-text mx-3">VCAN <sup></sup></div>
                </a>
          
                <hr className="sidebar-divider my-0" />
               
                <li className="nav-item active">
                    <Link to='/' className="nav-link">
                        <i className="fas fa-fw fa-tachometer-alt" />
                        <span>Dashboard</span></Link>
                </li>
           
                <hr className="sidebar-divider" />
         
                <div className="sidebar-heading">
                Edit and View
                </div>
            
                <li className="nav-item">
                    <Link to='/gamawidiya' className="nav-link">
                            <i className="fas fa-fw fa-cog" />
                            <span>Gama Wididya</span></Link>


                </li>
                <li className="nav-item">
                <Link className="nav-link" to='/gramaKottasaya'>
                    <i className="fas fa-fw fa-chart-area" />
                    <span>Grama Niladari Kottasaya</span></Link>
                </li>
               
                <li className="nav-item">
                <Link className="nav-link" to='/userData'>
                    <i className="fas fa-fw fa-chart-area" />
                    <span>User Data</span></Link>
                </li>
               
             
                <hr className="sidebar-divider d-none d-md-block" />
                {/* Sidebar Toggler (Sidebar) */}
                <div className="text-center d-none d-md-inline">
                <button className="rounded-circle border-0" id="sidebarToggle" />
                </div>
                </ul>
              


            </div>
        );
    }
}






