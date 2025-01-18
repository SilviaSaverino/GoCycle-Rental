import React from 'react'
import {Link} from "react-router-dom"
import './Navbar.css'
import logo from '../../assets/img/logo_gocycle.png'


function Navbar() {
  return (
    <header>
      <nav>
      <img className="logo" src={logo} alt="Logo of GoCycle Rental website" />
      <ul>
        <li>
          <Link to='GoCycle-Rental/'>Home</Link> 
        </li>
        <li>
        <Link to='about/'>About Us</Link> 
        </li>
        <li>
          Contact Us
        </li>
        <li>
          Help
        </li>
        <li>
          Hire Bike
        </li>
      </ul>
    </nav>
    </header>
  )
}

export default Navbar