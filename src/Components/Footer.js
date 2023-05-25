import React from "react";
import {AiFillTwitterCircle,AiFillLinkedin} from "react-icons/ai";
import {BsFacebook} from "react-icons/bs";
import {RiInstagramFill} from "react-icons/ri";
import './Footer.css';
import { NavLink } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

const Footer=()=>{
    return(
        <div>
            <footer className="sticky-footer">
                    <div className="socialIcons">
                       <NavLink className="activelink"><BsFacebook className="icon" /></NavLink>
                       <NavLink className="activelink" ><AiFillTwitterCircle className="icon" /></NavLink>
                       <NavLink className="activelink" ><AiFillLinkedin className="icon"/></NavLink>
                       <NavLink className="activelink"><RiInstagramFill className="icon"/></NavLink>
                    </div>
                    <div className="footer-nav">
                        <ul>
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

                    </div>
                    <div className="footer-bottom">
                        <p>Copyright @ Designed by Pavi teams</p>

                    </div>
                
            </footer>


        </div>
    )
}

export default Footer;