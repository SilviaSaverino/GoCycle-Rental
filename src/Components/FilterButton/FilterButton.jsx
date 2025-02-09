import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter } from "@fortawesome/free-solid-svg-icons";


export default function FilterButton({children, toggle}) {
    
    return (
        <button onClick={toggle}>{children} <FontAwesomeIcon icon={faFilter} className="icon" /></button>
    )
}