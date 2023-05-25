import React from 'react';
import { NavLink } from 'react-router-dom';



const Register=()=>{
    return(
        <>
        <section className='login'>
            <div className='container'>
                <div className='backimg'>
                    
                    <div className='text'>
                    <h3>Register</h3>
                    <h1>My Account</h1>
                    </div>
                </div>
                <div className="container mb-5">
                <div className="row">
                <div className="col-md 6">
                <form >
                <div class="mb-3">
                    <label class="form-label">Email address</label><br />
                    <input type='email' required class="form-control w-50" /><br />
                </div>
                <div class="mb-3">
                    <label class="form-label">Username *</label><br />
                    <input type='text'  required  class="form-control w-50" /><br />
                </div>
                <div class="mb-3">
                    <label class="form-label">Password *</label><br />
                    <input type='password' required class="form-control w-50" /><br />
                 </div>
                 <div class="mb-3">
                    <label class="form-label">Confirm Password *</label><br />
                    <input type='password' required  class="form-control w-50"/><br />
                    </div>
                    <button class="btn btn-outline-primary w-25 mx-auto">Register</button><br />
                    <NavLink to="/login" class='nav-link mt-20'>SignUp</NavLink>
                </form>
            </div>
            </div>
            </div>
            </div>


        </section>
        
        
        </>
    )
}

export default Register;