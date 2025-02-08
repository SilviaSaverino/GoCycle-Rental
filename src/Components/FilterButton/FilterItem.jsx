import React from "react"
import  "./Filter.css"

export default function FilterItem({ children }) {
    return (
        <div className="filter-item">
            {children}
        </div>
    )
}