import React from "react"
import { Link } from "react-router-dom"
import "./Bikes.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';


export default function RentBikes() {

    const [bicycles, setBicycles] = React.useState([])

    React.useEffect(() => {
        fetch("/api/bicycles")
            .then(res => res.json())
            .then(data => setBicycles(data.bicycles))
    }, [])

    const bikes = bicycles.map(bike => (
        <div key={bike.id} className="bikesInfo-container">
            <img src={bike.imageUrl} alt={bike.name} />
            <div className="bikesInfo">
                <h3>{bike.name}</h3>
                <p>£<span>{bike.price}</span>/day</p> 
                <button className="bikesInfo-btn">Learn More <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="arrow-icon" /></button>
            </div>
            
        </div>
    ))

    return (
        <div className="hire-container">
        <h1>Explore our bikes selection</h1>
        <div className="btn-container">
            <button>Filter</button>
            <button>Sort</button>
        </div>
            <div className="bikes-container">
                {bikes}
            </div>
        </div>
    )
}