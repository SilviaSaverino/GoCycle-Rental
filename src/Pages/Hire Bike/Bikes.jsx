import React from "react"
import "./Bikes.css"


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
            </div>
            <button className="bikesInfo-btn">Learn More</button>
        </div>
    ))

    return (
        <>
        <h1>Explore our bikes selection</h1>
            <div className="bikes-container">
                {bikes}
            </div>
        </>
    )
}