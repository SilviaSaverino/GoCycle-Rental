import React from "react"
import "./Specification.css"
import { useOutletContext } from "react-router-dom"

export default function Specification() {

    const { selectedBike } = useOutletContext()
    return (
        <div className="specification-container">

            <h3>Frameset</h3>
            <ul>
                <li><strong>Frame:</strong> 
                {selectedBike.specifications.frameset.frame}</li>
                <li><strong>Fork:</strong> FACT Carbon, 12x100mm thru-axle, flat-mount disc</li>
            </ul>

            <h3>Wheels</h3>
            <ul>
                <li><strong>Rims:</strong> DT R470 Disc</li>
                <li><strong>Tyres:</strong> Turbo Pro, 700x26</li>
            </ul>

            <h3>Drivetrain</h3>
            <ul>
                <li><strong>Crankset:</strong> Shimano 105, 12-speed</li>
                <li><strong>Shifters:</strong> Shimano 105 Di2 R7170, 12-speed</li>
                <li><strong>Front Derailleur:</strong> Shimano 105 Di2, Braze-on</li>
                <li><strong>Rear Derailleur:</strong> Shimano 105 Di2</li>
                <li><strong>Chain:</strong> Shimano SLX M7100, 12-speed w/ quick link</li>
                <li><strong>Cassette:</strong> Shimano 105, 12-speed, 11-34t</li>
                <li><strong>Bottom Bracket:</strong> Shimano Threaded BSA BB</li>
            </ul>

            <h3>Components</h3>
            <ul>
                <li><strong>Handlebar:</strong> Specialized Shallow Drop, 6061, 70x125mm, 31.8mm clamp</li>
                <li><strong>Stem:</strong> Tarmac integrated stem, 6-degree</li>
                <li><strong>Grips:</strong> Supacaz Super Sticky Kush</li>
                <li><strong>Brakes:</strong> Shimano 105, Hydraulic disc</li>
                <li><strong>Saddle:</strong> Body Geometry Power Sport, steel rails</li>
                <li><strong>Seatpost:</strong> 2021 Tarmac Carbon seat post, FACT Carbon, 20mm offset</li>
                <li><strong>Seat Binder:</strong> Tarmac integrated wedge</li>
            </ul>
        </div>

    )
}