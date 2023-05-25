import React from 'react';
import { useSelector } from 'react-redux';
import {NavLink} from 'react-router-dom';



const Cartbt=()=>{
    const state=useSelector((state)=>state.addItem)
    
    return(
        <div>
            <NavLink to="/cart" className='btn btn-outline-primary ms-3'>
            <span className='fa fa-shopping-cart me-1'></span> Cart {(state.length)}
            </NavLink>


        </div>
    )
}

export default Cartbt;