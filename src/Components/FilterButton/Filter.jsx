import React, { useState } from "react";

export default function Filter({ children }) {
    const [open, setOpen] = useState(false)


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

