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
                <h2>{bike.name}</h2>
                <p>{bike.description}</p>
                <h3>£<span>{bike.price}</span></h3>
            </div>
        </div>
    ))

    return (
        <>
            <h1>Hire a Bike page</h1>
            {bikes}
        </>
    )
}