import React from "react"
import  "./Filter.css"

export default function FilterDropdown({ children, open, toggle }) {
    return open ? (
        <div className="filter-dropdown" onClick={toggle}>
            {children}
        </div>
    ) : null
}