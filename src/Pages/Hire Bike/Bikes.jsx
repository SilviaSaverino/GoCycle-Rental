import React from "react"
import { Link } from "react-router-dom"
import "./Bikes.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpRightFromSquare,faCalendarDays, faFilter, faSort } from '@fortawesome/free-solid-svg-icons';

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
                <p>Type: {bike.type} bike</p>
                <p>£<span>{bike.price}</span>/day</p>
                <div className="availability">
                    {bike.available ?
                        <>
                            <span className="available">Available</span>
                            <Link to={`/bikeinfo/${bike.id}`}>
                                <button className="bikesInfo-btn">Learn More <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="icon" /></button>
                            </Link>
                        </>
                        :
                        <>
                            <span className="not-available">Not Available</span>
                            <Link to={`/bikeinfo/${bike.id}`}>
                                <button className="bikesInfo-btn"> Check Availability <FontAwesomeIcon icon={faCalendarDays} className="icon"/></button>
                            </Link>
                        </>
                    }
                </div>
            </div>
        </div>
    ))

    return (
        <div className="hire-container">
            <div className="top-container">
                <h1>Explore our bikes selection</h1>
                <button>Filter<FontAwesomeIcon icon={faFilter} className="icon" /></button>
                <button>Sort<FontAwesomeIcon icon={faSort} className="icon" /></button>
            </div>
            <div className="bikes-container">
                {bikes}
            </div>
        </div>
    )
}