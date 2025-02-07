import React from "react"
import { useOutletContext } from "react-router-dom"

export default function Intro() {

    const { selectedBike } = useOutletContext()
    return (
        <>
            <div>
                <h3>£<span>{selectedBike.price}</span>/day</h3>
                <p>{selectedBike.description}</p>
            </div>
        </>
    )
}