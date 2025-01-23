import React from "react"
import { useParams } from "react-router-dom"
import "./BikeInfo.css"
// import BikeAvailability from "../../Components/Bike Availability/BikeAvailability"

export default function BikeInfo() {
    const params = useParams()
    const [selectedBike, setSelectedBike] = React.useState([])

    React.useEffect(() => {
        fetch(`/api/bicycles/${params.id}`)
            .then(res => res.json())
            .then(data => setSelectedBike(data.bicycles))
    }, [params.id])

    if (!selectedBike.id) {
        return <div className="loading"><h2>Loading bike information...</h2></div>;
    }

    return (
        <>
        <div className="productInfo-container">
            <div className="productInfo">
                <h2>{selectedBike.name}</h2>
                <p>{selectedBike.description}</p>
                <h3>£<span>{selectedBike.price}</span>/day</h3>
                {selectedBike.available ?
                    <button className="intro_btn">Rent Now</button>
                    :
                    <button className="intro_btn">Check Next Availability</button>
                }
            </div>
            <div className="productImage-container">
                <img
                    src={selectedBike.imageUrl}
                    alt={`Image of ${selectedBike.name} bike`}
                />
                {!selectedBike.available &&
                    <>
                        <div className="not-availableBox">
                            <span>Currently Not Available</span>
                        </div>
                    </>
                }
            </div>
        </div>
        {/* <BikeAvailability /> */}
        </>
    );
}
