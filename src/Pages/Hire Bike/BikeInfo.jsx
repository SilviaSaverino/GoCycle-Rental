import React from "react"
import { useParams, Link, Outlet, NavLink, useLocation } from "react-router-dom"
import "./BikeInfo.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleLeft } from "@fortawesome/free-solid-svg-icons";
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

    const location = useLocation()
    console.log(location)

    const search = location.state && location.state.search || ""

    return (
        <>
            <div className="info-container">
                <div className="back-link">
                    <Link
                        to= {`../HireBike/${search}`}
                    > <p><FontAwesomeIcon icon={faCircleLeft} className="icon" /> Back to all bikes</p></Link>
                </div>
                <div className="productInfo-container">
                    <div className="productInfo">
                        <h2>{selectedBike.name}</h2>
                        <nav>
                            <ul>
                                <li>
                                    <NavLink to="."
                                        end
                                        className={({ isActive }) => isActive ? "active-link" : null}>Intro</NavLink>
                                </li>
                                <li>
                                    <NavLink to="specification"
                                        className={({ isActive }) => isActive ? "active-link" : null}>Specification</NavLink>
                                </li>
                                <li>
                                    <NavLink to="geometry"
                                        className={({ isActive }) => isActive ? "active-link" : null}>Geometry</NavLink>
                                </li>
                                <li>
                                    <NavLink to="bikereview"
                                        className={({ isActive }) => isActive ? "active-link" : null}>Review</NavLink>
                                </li>
                            </ul>
                        </nav>
                        <div className="outlet-container">
                            <Outlet context={{ selectedBike }} />
                        </div>
                       
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
            </div>
        </>
    );
}
