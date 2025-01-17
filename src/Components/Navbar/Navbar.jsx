import React from 'react'
import './Navbar.css'
import logo from '../../assets/img/logo_gocycle.png'


function Navbar() {
  return (
    <nav>
      <img className="logo" src={logo} alt="" />
      <ul>
        <li>
          Home
        </li>
        <li>
          About Us
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
  )
}

export default Navbar