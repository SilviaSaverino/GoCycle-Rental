import React from "react"
import  "./Filter.css"

export default function FilterDropdown({ children }) {
    return (
        <div className="filter-dropdown">
            {children}
        </div>
    )
}