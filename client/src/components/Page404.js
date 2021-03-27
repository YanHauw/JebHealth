import React, { Component } from "react";
import './style/Page404.css';
import logo from '../images/logo-header.png';


//page404 in case someone tries to access an invalid URL
export default function Page404(props) {
        return (
            <div className="login">
                <img src={logo} id="loginlogo"/>
                <div className="intro">
                    Uh oh, this page doesn't exist
                </div>
             </div> 
        )
}
