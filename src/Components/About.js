import React from "react";
import { NavLink } from "react-router-dom";

const About=()=>{
    return(
        <div className="container py-5 my-5">
            <div className="row">
                <div className="col-md-6">
                    <h1 className="text-primary fw-bold mb-4">About Us</h1>
                    <p className="lead mb-4">
                        At <strong>MAsTeR HuB</strong>, our aim is to offer you LAPTOP/MOBILE 
                        that show you that we really care!
                         Not only have we got the trendiest <strong>MOBILE/LAPTOP</strong>,
                          but we can also guarantee that they are of the finest quality.

                            We started as a small business in <strong>Chennai/India/2023</strong>, and 
                            our aim is to continue providing our customers with products 
                            that keep them happy, at prices that keep them happy.  

                            Our customers are our top priority and through our products
                             we work hard towards building long-lasting and meaningful relations with them.
                    </p>
                    <NavLink to="/contact" className="btn btn-outline-primary px-3">Contact Us</NavLink>


                </div>
                <div className="col-md-6 d-flex justify-content-center">
                    <img src="image/about.png" alt="About us" height="400px" width="400px" />
                </div>
            </div>

        </div>
    )
}

export default About;