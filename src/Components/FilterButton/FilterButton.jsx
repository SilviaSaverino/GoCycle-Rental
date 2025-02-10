import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter } from "@fortawesome/free-solid-svg-icons";


export default function FilterButton({children, hideBtn}) {
    
    return (
        <button onClick={hideBtn}> <h4>{children} </h4><FontAwesomeIcon icon={faFilter} className="icon"/></button>
    )
}