import React from "react";

import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink } from "react-router-dom";
import Login from "./buttons/Login";
import Sign from "./buttons/Sign";
import Cartbt from "./buttons/Cartbt";
import Loginnew from "./buttons/Loginnew";
import Register from "./buttons/Sign";


const Header = () => {
    return (
        <div>

            <nav className="navbar navbar-expand-lg bg-body-tertiary">

        
                <div className="container-fluid py-2">
                  
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/product">Product</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/about">About</NavLink>
                            </li>

                            <li className="nav-item">
                                <NavLink className="nav-link " to="/contact" >Contact</NavLink>
                            </li>
                            </ul>
                           
                      
                    <NavLink className="navbar-brand mx-auto fw-bold fs-3 text  " to="/Navbar">Flipzon</NavLink>
                   

                        <button class="btn btn-outline-primary ms-auto" ><span></span>
                       <NavLink  to="/login" 
                          ><span className='fa fa-sign-in'></span>Login</NavLink></button>
                    <button class="btn btn-outline-primary mx-3" >
                       <NavLink  to="/register" 
                          ><span className='fa fa-sign-in'></span>Register</NavLink></button>
                    <Cartbt />
                    
                    </div>
                </div>
          
            </nav>
        </div>
    )
}

export default Header;