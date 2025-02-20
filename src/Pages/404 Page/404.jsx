import React from "react"
import { Link } from "react-router-dom"
import "./404.css"

export default function PageNotFound() {
    return (
        <div className="page-not-found">
            <h1>404</h1>
            <h2>Page not found</h2>
            <Link to='/'><button >Return to Home</button></Link>
        </div>

    )
}