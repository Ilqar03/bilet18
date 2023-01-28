import React from 'react'
import {NavLink} from "react-router-dom";
import "./Navbar.scss"

function Navbar() {
  return (
    <nav>
        <div className='navbar'>
            <div className='nav_sections'>
                <NavLink to={'/'}>Home</NavLink>
                <NavLink to={""}>About Us</NavLink>
                <NavLink to={""}> Our Services</NavLink>
                <NavLink to={""}> Pricing Table</NavLink>
                <NavLink to={""}>Contact Us</NavLink>
                <NavLink to={"/addpage"}>Add Page</NavLink>
            </div>
            <div className='nav_button'>
                <button>GET A QUOTE</button>
            </div>
        </div>
    </nav>
  )
}

export default Navbar