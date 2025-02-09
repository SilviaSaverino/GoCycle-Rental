import React from "react"
import  "./Filter.css"

export default function FilterItem({ children,onClick }) {
    return (
        <div className="filter-item" onClick={onClick}>
           <p className="small">{children}</p> 
        </div>
    )
}