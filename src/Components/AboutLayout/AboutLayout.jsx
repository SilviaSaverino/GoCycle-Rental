import React from "react"
import { NavLink, Outlet } from "react-router-dom"
import "./AboutLayout.css"

export default function AboutLayout() {
    return (
        <>
            <div className="about-header">
                <h1>About <span>Go</span>Cycle Rental</h1>
                <nav className="about-dashboard">
                    <ul>
                        <li><NavLink
                            to="."
                            end  // end props ensures "About Us" is only active on /about/ and not on its subroutes.
                            className={({ isActive }) => isActive ? "active-link" : null}>About Us</NavLink></li>
                        <li><NavLink
                            to="gallery"
                            className={({ isActive }) => isActive ? "active-link" : null}>Gallery</NavLink></li>
                        <li><NavLink
                            to="reviews"
                            className={({ isActive }) => isActive ? "active-link" : null}>Reviews</NavLink></li>
                    </ul>
                </nav>
            </div>
            <Outlet />
        </>
    )
}