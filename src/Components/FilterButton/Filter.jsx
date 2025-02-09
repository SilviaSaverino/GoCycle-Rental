import React, { useState } from "react";
import FilterDropdown from "./FilterDropdown"
import FilterButton from "./FilterButton"

export default function Filter({ children }) {
    const [open, setOpen] = useState(true)


    function toggle() {
        setOpen(prevOpen => !prevOpen)
    }

    return (
        <>
            <div className="filter">
                {React.Children.map(children, (child) => {
                    return React.cloneElement(child, {
                        open,
                        toggle
                    })
                })}
            </div>
        </>

    )

}

