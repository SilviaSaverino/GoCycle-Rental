import React from "react"
import { Link, Outlet } from "react-router-dom"
import "./AboutLayout.css"

export default function AboutLayout() {
    return (
        <>
            <div className="about-header">
                <h1>About <span>Go</span>Cycle Rental</h1>
                <nav className="about-dashboard">
                    <ul>
                        <li><Link to="/about/">About Us</Link></li>
                        <li><Link to="/about/gallery">Gallery</Link></li>
                        <li><Link to="/about/reviews">Reviews</Link></li>
                    </ul>
                </nav>
            </div>
            <Outlet />
        </>
    )
}