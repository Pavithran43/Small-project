import React from "react";

const Contact = () => {
    return (
        <div className="container mb-5">
            <div className="row">
                <div className="col-12 text-center py-4 my-4">
                    <h1>Have Some Question?</h1>
                    <hr />

                </div>
            </div>
            <div className="row">
            <div className="col-md 5 d-flex justify-content-center">
                <img src="image/email.jpeg" alt="Contact us" height="400px" width="400px" />
                
                </div>
            
            <div className="col-md 6">
                <form>
                <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Full Name</label>
                        <input type="email" class="form-control" id="exampleInputEmail1"  />
                        
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Email address</label>
                        <input type="email" class="form-control" id="exampleInputEmail1"  />
                        
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Example TextBox</label>
                        <textarea  class="form-control" id="exampletext" rows="5"></textarea>
                    </div>
                    
                    <button type="submit" class="btn btn-outline-primary">Send Message</button>
                </form>



            </div>
            </div>

        </div>
    )
}

export default Contact;