import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Success(){
    const[count,setCount]=useState(15);
    const navigate=useNavigate();

    useEffect(()=>{
        setInterval(()=>setCount((count)=>count-1),1000);
        setTimeout(()=>{navigate("/")
    }, 7500);

    },[navigate]);



    return(
        <div>
            <h2>Your Order have been placed successfully.You will be redirected in {count} seconds</h2>
        </div>
    )
}