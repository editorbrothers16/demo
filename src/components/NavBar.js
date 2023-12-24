import React from 'react'
import { Link  } from "react-router-dom";
export default function NavBar(){
    return <>
    <div className='nav'>
        <Link to='/' className='nav-item'>home</Link>
        <Link to='/aboutus' className='nav-item'>aboutus</Link>
    </div>
    </>
}