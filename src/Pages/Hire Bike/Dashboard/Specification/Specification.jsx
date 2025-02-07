import React, { useState } from "react"
import "./Specification.css"
import { useOutletContext } from "react-router-dom"

export default function Specification() {

    const { selectedBike } = useOutletContext()
    const [selected, setSelected] = useState(null)

    function handleSelection(currentSpec) {
        setSelected(selected === currentSpec ? null : currentSpec)
    }
    return (
        <div className="accordion-container">
            <div className="accordion">
                <div className="item">
                    <div className="title" onClick={() => handleSelection("frameset")}>
                        {selected === "frameset" ? <h3>Frameset:</h3> : <h3>Frameset</h3>}
                        <span>{selected === "frameset" ? "-" : "+"}</span>
                    </div>
                    {selected === "frameset" && (
                        <div className="spec">
                            <ul className="accordion-list">
                                <li><span>Frame:</span> {selectedBike.specifications.frameset.frame}</li>
                                <li><span>Fork:</span> {selectedBike.specifications.frameset.fork}</li>
                            </ul>
                        </div>
                    )
                    }
                </div>
                <div className="item">
                    <div className="title" onClick={() => handleSelection("wheels")}>
                    {selected === "wheels" ?  <h3>Wheels:</h3> : <h3>Wheels</h3>}
                        <span>{selected === "wheels" ? "-" : "+"}</span>
                    </div>
                    {selected === "wheels" && (
                        <div className="spec">
                            <ul className="accordion-list">
                                <li><span>Rims:</span> {selectedBike.specifications.wheels.rims}</li>
                                <li><span>Tyres:</span> {selectedBike.specifications.wheels.tyres}</li>
                            </ul>
                        </div>
                    )}
                </div>
                <div className="item">
                    <div className="title" onClick={() => handleSelection("drivetrain")}>
                    {selected === "drivetrain" ?  <h3>Drivetrain:</h3> : <h3>Drivetrain</h3>}
                        <span>{selected === "drivetrain" ? "-" : "+"}</span>
                    </div>
                    {selected === "drivetrain" && (
                        <div className="spec">
                            <ul className="accordion-list">
                                <li><span>Crankset:</span> {selectedBike.specifications.drivetrain.crankset}</li>
                                <li><span>Shifters:</span> {selectedBike.specifications.drivetrain.shifters}</li>
                                <li><span>Front Derailleur:</span> {selectedBike.specifications.drivetrain.frontDerailleur}</li>
                                <li><span>Rear Derailleur:</span> {selectedBike.specifications.drivetrain.rearDerailleur}</li>
                                <li><span>Chain:</span> {selectedBike.specifications.drivetrain.chain}</li>
                                <li><span>Cassette:</span> {selectedBike.specifications.drivetrain.cassette}</li>
                                <li><span>Bottom Bracket:</span> {selectedBike.specifications.drivetrain.bottomBracket}</li>
                            </ul>
                        </div>
                    )}
                </div>
                <div className="item">
                    <div className="title" onClick={() => handleSelection("components")}>
                    {selected === "components" ?  <h3>Components:</h3> : <h3>Components</h3>}
                        <span>{selected === "components" ? "-" : "+"}</span>
                    </div>
                    {selected === "components" && (
                        <div className="spec">
                            <ul className="accordion-list">
                                <li><span>Handlebar:</span> {selectedBike.specifications.components.handlebar}</li>
                                <li><span>Stem:</span> {selectedBike.specifications.components.stem}</li>
                                <li><span>Grips:</span> {selectedBike.specifications.components.grips}</li>
                                <li><span>Brakes:</span> {selectedBike.specifications.components.brakes}</li>
                                <li><span>Saddle:</span> {selectedBike.specifications.components.saddle}</li>
                                <li><span>Seatpost:</span> {selectedBike.specifications.components.seatpost}</li>
                                <li><span>Seat Binder:</span> {selectedBike.specifications.components.seatBinder}</li>
                            </ul>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}