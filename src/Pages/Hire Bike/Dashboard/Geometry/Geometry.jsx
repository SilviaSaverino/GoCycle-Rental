import React, { useState } from "react"
import "./Geometry.css"
import { useOutletContext } from "react-router-dom"



export default function Geometry() {

    const { selectedBike } = useOutletContext()
    const [selected, setSelected] = useState(null)

    function handleGeometrySelection(geometrySpec) {
        setSelected(selected === geometrySpec ? null : geometrySpec)
    }

    return (
        <div className="accordion-container">
            <div className="accordion">
                <div className="item">
                    <div className="title" onClick={() => handleGeometrySelection("geometry.frame")}>
                        {selected === "geometry.frame" ? <h3>Frame:</h3> : <h3>Frame</h3>}
                        <span>{selected === "geometry.frame" ? "-" : "+"}</span>
                    </div>
                    {selected === "geometry.frame" && (
                        <div className="spec">
                            <ul className="accordion-list">
                                <li><span>Frame:</span> {selectedBike.geometry.frame}</li>
                            </ul>
                        </div>
                    )}
                </div>
                <div className="item">
                    <div className="title" onClick={() => handleGeometrySelection("geometry.fork")}>
                        {selected === "geometry.fork" ? <h3>Fork:</h3> : <h3>Fork</h3>}
                        <span>{selected === "geometry.fork" ? "-" : "+"}</span>
                    </div>
                    {selected === "geometry.fork" && (
                        <div className="spec">
                            <ul className="accordion-list">
                                <li><span>Fork:</span> {selectedBike.geometry.fork}</li>
                            </ul>
                        </div>
                    )}
                </div>
                <div className="item">
                    <div className="title" onClick={() => handleGeometrySelection("geometry.shifters")}>
                        {selected === "geometry.shifters" ? <h3>Shifters:</h3> : <h3>Shifters</h3>}
                        <span>{selected === "geometry.shifters" ? "-" : "+"}</span>
                    </div>
                    {selected === "geometry.shifters" && (
                        <div className="spec">
                            <ul className="accordion-list">
                                <li><span>Shifters:</span> {selectedBike.geometry.shifters}</li>
                            </ul>
                        </div>
                    )}
                </div>
                <div className="item">
                    <div className="title" onClick={() => handleGeometrySelection("geometry.rearDerailleur")}>
                        {selected === "geometry.rearDerailleur" ? <h3>Rear Derailleur:</h3> : <h3>Rear Derailleur</h3>}
                        <span>{selected === "geometry.rearDerailleur" ? "-" : "+"}</span>
                    </div>
                    {selected === "geometry.rearDerailleur" && (
                        <div className="spec">
                            <ul className="accordion-list">
                                <li><span>Rear Derailleur:</span> {selectedBike.geometry.rearDerailleur}</li>
                            </ul>
                        </div>
                    )}
                </div>
                <div className="item">
                    <div className="title" onClick={() => handleGeometrySelection("geometry.frontDerailleur")}>
                        {selected === "geometry.frontDerailleur" ? <h3>Front Derailleur:</h3> : <h3>Front Derailleur</h3>}
                        <span>{selected === "geometry.frontDerailleur" ? "-" : "+"}</span>
                    </div>
                    {selected === "geometry.frontDerailleur" && (
                        <div className="spec">
                            <ul className="accordion-list">
                                <li><span>Front Derailleur:</span> {selectedBike.geometry.frontDerailleur}</li>
                            </ul>
                        </div>
                    )}
                </div>
                <div className="item">
                    <div className="title" onClick={() => handleGeometrySelection("geometry.chainset")}>
                        {selected === "geometry.chainset" ? <h3>Chainset:</h3> : <h3>Chainset</h3>}
                        <span>{selected === "geometry.chainset" ? "-" : "+"}</span>
                    </div>
                    {selected === "geometry.chainset" && (
                        <div className="spec">
                            <ul className="accordion-list">
                                <li><span>Chainset:</span> {selectedBike.geometry.chainset}</li>
                            </ul>
                        </div>
                    )}
                </div>
                <div className="item">
                    <div className="title" onClick={() => handleGeometrySelection("geometry.bottomBracket")}>
                        {selected === "geometry.bottomBracket" ? <h3>Bottom Bracket:</h3> : <h3>Bottom Bracket</h3>}
                        <span>{selected === "geometry.bottomBracket" ? "-" : "+"}</span>
                    </div>
                    {selected === "geometry.bottomBracket" && (
                        <div className="spec">
                            <ul className="accordion-list">
                                <li><span>Bottom Bracket:</span> {selectedBike.geometry.bottomBracket}</li>
                            </ul>
                        </div>
                    )}
                </div>
                <div className="item">
                    <div className="title" onClick={() => handleGeometrySelection("geometry.chain")}>
                        {selected === "geometry.chain" ? <h3>Chain:</h3> : <h3>Chain</h3>}
                        <span>{selected === "geometry.chain" ? "-" : "+"}</span>
                    </div>
                    {selected === "geometry.chain" && (
                        <div className="spec">
                            <ul className="accordion-list">
                                <li><span>Chain:</span> {selectedBike.geometry.chain}</li>
                            </ul>
                        </div>
                    )}
                </div>
                <div className="item">
                    <div className="title" onClick={() => handleGeometrySelection("geometry.tyres")}>
                        {selected === "geometry.tyres" ? <h3>Tyres:</h3> : <h3>Tyres</h3>}
                        <span>{selected === "geometry.tyres" ? "-" : "+"}</span>
                    </div>
                    {selected === "geometry.tyres" && (
                        <div className="spec">
                            <ul className="accordion-list">
                                <li><span>Tyres:</span> {selectedBike.geometry.tyres}</li>
                            </ul>
                        </div>
                    )}
                </div>
                <div className="item">
                    <div className="title" onClick={() => handleGeometrySelection("geometry.brakes")}>
                        {selected === "geometry.brakes" ? <h3>Brakes:</h3> : <h3>Brakes</h3>}
                        <span>{selected === "geometry.brakes" ? "-" : "+"}</span>
                    </div>
                    {selected === "geometry.brakes" && (
                        <div className="spec">
                            <ul className="accordion-list">
                                <li><span>Brakes:</span> {selectedBike.geometry.brakes}</li>
                            </ul>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}


