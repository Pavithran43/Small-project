import React,{useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button,Modal } from 'react-bootstrap';





/*

class Login extends React.Component{
    constructor(){
        super();
        this.state={
            show:false
        }
    }
   

    handleModal=()=>{
        this.setState({show:!this.state.show})
    }
    render(){
    return (
        <div>
            <button  class="btn btn-outline-primary ms-auto" 
            onClick={this.handleModal}><span className='fa fa-sign-in'></span>Login</button>
            <Modal show={this.state.show} onHide={this.handleModal} >
                <Modal.Header closeButton>Modal Heading</Modal.Header>
                <Modal.Body>
                    <button class="btn btn-primary w-100 mb-2 me-1" >
                  Sign in With Google
                    </button>
                    <button class="btn btn-primary w-100 mb-2">
                  Sign in With Facebook
                    </button>
                <form>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" />
  </div>
  <div class="mb-3 form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1" />
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" class="btn btn-outline-primary w-100">Submit</button>
</form> 


                </Modal.Body>
               
            </Modal>
        </div>
        )
    }
}


export default Login  */