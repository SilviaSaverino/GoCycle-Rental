import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter } from "@fortawesome/free-solid-svg-icons";


export default function FilterButton({children, toggle}) {
    
    return (
        <button onClick={toggle}> <h4>{children} </h4><FontAwesomeIcon icon={faFilter} className="icon"/></button>
    )
}