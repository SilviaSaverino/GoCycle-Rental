import React from "react"
import  "./Filter.css"

export default function FilterDropdown({ children, open }) {
    return open ? (
        <div className="filter-dropdown">
            {children}
        </div>
    ) : null
}