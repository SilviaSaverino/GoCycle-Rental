import React from 'react'
import { Link, NavLink } from "react-router-dom"
import './Navbar.css'
import logo from '../../assets/img/logo_gocycle.png'
import loginIcon from '../../assets/img/login/loginIcon.png'


function Navbar() {
  
  return (
    <header>
      <nav>
        <img className="logo" src={logo} alt="Logo of GoCycle Rental website" />
        <ul>
          <li>
            <NavLink
              to='.'
              className={({ isActive }) => isActive ? "active-link" : null}>Home</NavLink>
          </li>
          <li>
            <NavLink
              to='about/'
              className={({ isActive }) => isActive ? "active-link" : null}>About Us</NavLink>
          </li>
          <li>
            <NavLink
              to='ContactUs/'
              className={({ isActive }) => isActive ? "active-link" : null}>Contact Us</NavLink>
          </li>
          <li>
            <NavLink
              to='Help/'
              className={({ isActive }) => isActive ? "active-link" : null}>Help</NavLink>
          </li>
          <li>
            <NavLink
              to='HireBike/'
              className={({ isActive }) => isActive ? "active-link" : null}>Hire Bike</NavLink>
          </li>
          <li className="login-link">
            <NavLink to="Login/">
              <img className="login-icon" src={loginIcon} alt="Login Icon" /></NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Navbar