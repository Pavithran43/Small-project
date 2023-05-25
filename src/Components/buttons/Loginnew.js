import React from 'react';
import { NavLink } from 'react-router-dom';

function Loginnew(){
    return(
        <>
      
        <section className='login'>
            <div className='container'>
                <div className='backimg'>
                
                    <div className='text'>
                    <h3>Login</h3>
                    <h1>My Account</h1>
                    </div>
                </div>
                <div className="container mb-5">
                <div className="row">
                <div className="col-md 6">
                <form >
                <div class="mb-3">
                    <label class="form-label">Username or Email address</label><br />
                    <input type='email' required class="form-control w-50" /><br />
                </div>
         
                <div class="mb-3">
                    <label class="form-label">Password *</label><br />
                    <input type='password' required class="form-control w-50" /><br />
                 </div>
                    
                    <button class="btn btn-outline-primary w-25 mx-auto">Login</button><br />

                    <NavLink to="/register" class='nav-link mt-20'>Signin</NavLink>
                 
                </form>
            </div>
            </div>
            </div>
            </div>


        </section>
        
        
        </>
    )
}

export default Loginnew;

