import React from 'react'   
import { Outlet, Navigate } from 'react-router-dom'

export default function AuthRequired() {
    const authenticated = false

    if(!authenticated) {
        return (
        <Navigate 
        to="/Login"
        state={{message:"Please log in to access this feature."}}/>
        )
    }
    return <Outlet />
}
