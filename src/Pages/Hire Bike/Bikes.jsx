import React from "react"
import { Link, useSearchParams } from "react-router-dom"
import "./Bikes.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowUpRightFromSquare, faCalendarDays } from "@fortawesome/free-solid-svg-icons"

import Filter from "../../Components/FilterButton/Filter.jsx"
import FilterDropdown from "../../Components/FilterButton/FilterDropdown.jsx"
import FilterButton from "../../Components/FilterButton/FilterButton.jsx"
import FilterItem from "../../Components/FilterButton/FilterItem.jsx"

export default function RentBikes() {
    const [bicycles, setBicycles] = React.useState([])
    const [showRemoveFilterPopup, setShowRemoveFilterPopup] = React.useState(false)

    const [searchParams, setSearchParams] = useSearchParams()
    const typeFilter = searchParams.get("type")
    const availabilityFilter = searchParams.get("available")

    React.useEffect(() => {
        fetch("/api/bicycles")
            .then((res) => res.json())
            .then((data) => setBicycles(data.bicycles))
    }, [])

    const filteredBikes = (bike) => {
        return typeFilter ? bike.type.toLowerCase() === typeFilter : true
    }

    const sortedAvailableBikes = (bike) => {
        return availabilityFilter ? bike.available.toString() === availabilityFilter : true
    }

    const displayedBikes = bicycles.filter(bike => {
        return filteredBikes(bike) && sortedAvailableBikes(bike)
    })

    const bikes = displayedBikes.length > 0 ? displayedBikes.map(bike => (
        <div key={bike.id} className="bikesInfo-container">
            <img src={bike.imageUrl} alt={bike.name} />
            <div className="bikesInfo">
                <h3>{bike.name}</h3>
                <p>Type: {bike.type} bike</p>
                <p>£<span>{bike.price}</span>/day</p>
                <div className="availability">
                    {bike.available ? (
                        <>
                            <span className="available">Available</span>
                            <Link to={`/bikeinfo/${bike.id}`}>
                                <button className="bikesInfo-btn">
                                    Learn More <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="icon" />
                                </button>
                            </Link>
                        </>
                    ) : (
                        <>
                            <span className="not-available">Not Available</span>
                            <Link to={`/bikeinfo/${bike.id}`}>
                                <button className="bikesInfo-btn">
                                    Check Availability <FontAwesomeIcon icon={faCalendarDays} className="icon" />
                                </button>
                            </Link>
                        </>
                    )}
                </div>
            </div>
        </div>
    )) : <p className="loading-bikes">Loading Bikes...</p>

    const filterDropdownItems = ["Mountain", "Road", "Electric", "Kids"]
    const sortDropdownItems = ["Available", "Not Available"]
    return (
        <div className="hire-container">
            <div className="top-container">
                <h1>Explore our bikes selection</h1>
                <div className="filter-section">
                    <div className="filter-container">
                        <Filter>
                            <FilterButton>Filter</FilterButton >
                            <FilterDropdown>
                                {filterDropdownItems.map(items => (

                                    <FilterItem key={items}
                                        onClick={() => {
                                            const currentParams = new URLSearchParams(searchParams)
                                            if (currentParams.get("type") === items.toLowerCase()) {
                                            } else {
                                                currentParams.set("type", items.toLowerCase())
                                            }
                                            setSearchParams(currentParams)
                                        }} >
                                        {items}
                                    </FilterItem>
                                ))}
                            </FilterDropdown>
                        </Filter>
                    </div>

                    <div className="sort-container">
                        <Filter>
                            <FilterButton>Sort</FilterButton >
                            <FilterDropdown>
                                {sortDropdownItems.map(items => (
                                    <FilterItem key={items}
                                        onClick={() => {
                                            const currentParams = new URLSearchParams(searchParams)
                                            if (items === "Available") {
                                                if (currentParams.get("available") === "true") {
                                                } else {
                                                    currentParams.set("available", "true")
                                                }
                                            } else if (items === "Not Available") {
                                                if (currentParams.get("available") === "false") {
                                                } else {
                                                    currentParams.set("available", "false")
                                                }
                                            }
                                            setSearchParams(currentParams)
                                        }}
                                    >
                                        {items}
                                    </FilterItem>

                                ))}
                            </FilterDropdown>
                        </Filter>
                    </div>

                    {(typeFilter || availabilityFilter) ? (
                        <div className="active-filters">
                            <span>
                                Active filters:
                            </span>


                            {typeFilter && (
                                <div
                                    className="removeFilterPopup-container"
                                    onMouseEnter={() => setShowRemoveFilterPopup(true)}
                                    onMouseLeave={() => setShowRemoveFilterPopup(false)}
                                >
                                    <div className="filter-tag small">
                                        <p className="strike-on-hover" onClick={() => {
                                            const currentParams = new URLSearchParams(searchParams);
                                            currentParams.delete("type");
                                            setSearchParams(currentParams);
                                        }}> <strong>Bike type:</strong>  {typeFilter.charAt(0).toUpperCase() + typeFilter.slice(1)} </p>
                                    </div>
                                    {showRemoveFilterPopup && <p className="removeFilterPopup-box small">Remove filter</p>}
                                </div>
                            )}

                            {availabilityFilter && (
                                <div
                                    className="removeFilterPopup-container"
                                    onMouseEnter={() => setShowRemoveFilterPopup(true)}
                                    onMouseLeave={() => setShowRemoveFilterPopup(false)}
                                >
                                    <div className="filter-tag small">
                                        <p className="strike-on-hover" onClick={() => {
                                            const currentParams = new URLSearchParams(searchParams);
                                            currentParams.delete("available");
                                            setSearchParams(currentParams);
                                        }}> <strong>Sorted by:</strong>  {availabilityFilter === "true" ? "Available" : "Not Available"}
                                            
                                        </p>
                                    </div>
                                    {showRemoveFilterPopup && <p className="removeFilterPopup-box small">Remove filter</p>}
                                </div>
                            )}
                        </div>
                    ) : (
                        <div className="active-filters">
                            <span>No Active filters</span>
                        </div>)}
                </div>
            </div>
            <div className="bikes-container">
                {bikes}
            </div>
        </div>
    )
}

