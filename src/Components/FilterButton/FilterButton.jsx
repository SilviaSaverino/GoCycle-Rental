import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter } from "@fortawesome/free-solid-svg-icons";


export default function FilterButton({children, onClick}) {
    
    return (
        <button onClick={onClick}>{children} <FontAwesomeIcon icon={faFilter} className="icon" /></button>
    )
}