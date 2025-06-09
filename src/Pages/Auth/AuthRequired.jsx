import React from 'react'
import { Outlet, Navigate, useLocation } from 'react-router-dom'

export default function AuthRequired() {
    const isAuthenticated = localStorage.getItem("loggedin") === "true" 
    const location = useLocation()

    if (!isAuthenticated) {
        return (
            <Navigate
                to="/Login"
                state={
                    {
                        message: "Please, log in to access this feature.",
                        userNavigatingFrom: location.pathname
                    }
                }
                replace
            />
        )

    }
    return <Outlet />
}
