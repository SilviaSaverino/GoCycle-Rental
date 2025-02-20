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


    const search = (location.state && location.state.search) || ""

    const filtered = location.state.type ? location.state.type : ""
    const sorted = (location.state && location.state.sort == null)
        ? ""
        : location.state.sort === "true"
            ? "Available"
            : "Not Available";


    return (
        <>
            <div className="info-container">
                <div className="back-link">
                    <Link
                        to={`../HireBike/${search}`}
                    >
                        <p><FontAwesomeIcon icon={faCircleLeft} className="icon" /> {`Back to ${sorted} ${filtered.charAt(0).toUpperCase() + filtered.slice(1)}`} bikes</p></Link>
                </div>
                <div className="productInfo-container">
                    <div className="productInfo">
                        <h2>{selectedBike.name}</h2>
                        <nav>
                            <ul>
                                <li>
                                    <NavLink to="."
                                        end
                                        state={location.state}
                                        className={({ isActive }) => isActive ? "active-link" : ""}>Intro</NavLink>
                                </li>
                                <li>
                                    <NavLink to="specification"
                                        state={location.state}
                                        className={({ isActive }) => isActive ? "active-link" : ""}>Specification</NavLink>
                                </li>
                                <li>
                                    <NavLink to="geometry"
                                        state={location.state}
                                        className={({ isActive }) => isActive ? "active-link" : ""}>Geometry</NavLink>
                                </li>
                                <li>
                                    <NavLink to="bikereview"
                                        state={location.state}
                                        className={({ isActive }) => isActive ? "active-link" : ""}>Review</NavLink>
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
    )
}