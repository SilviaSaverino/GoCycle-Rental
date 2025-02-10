import React from "react";
import { Link, useSearchParams } from "react-router-dom";
import "./Bikes.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare, faCalendarDays} from "@fortawesome/free-solid-svg-icons";

import Filter from "../../Components/FilterButton/Filter.jsx";
import FilterDropdown from "../../Components/FilterButton/FilterDropdown.jsx";
import FilterButton from "../../Components/FilterButton/FilterButton.jsx";
import FilterItem from "../../Components/FilterButton/FilterItem.jsx"

export default function RentBikes() {
    const [bicycles, setBicycles] = React.useState([])
    const [searchParams, setSearchParams] = useSearchParams()
    const typeFilter = searchParams.get("type")
    const availabilityFilter= searchParams.get("available")

    React.useEffect(() => {
        fetch("/api/bicycles")
            .then((res) => res.json())
            .then((data) => setBicycles(data.bicycles))
    }, []);

    const filteredBikes = typeFilter
        ?
        bicycles.filter(bike => bike.type.toLowerCase() === typeFilter)
        : bicycles

    const sortedAvailableBikes = availabilityFilter === "true"
        ? filteredBikes.filter(bike => bike.available === true) 
        : filteredBikes;

    const displayedBikes = availabilityFilter && sortedAvailableBikes.length > 0
    ? sortedAvailableBikes
    : filteredBikes;

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
    const sortDropdownItems = ["Availability"]

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
                                        onClick={() => { setSearchParams({ type: items.toLowerCase() }) }} >
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
                                        if (currentParams.get("available") === "true") {
                                            currentParams.delete("available")
                                        } else {
                                            currentParams.set("available", "true")
                                        }
                                        setSearchParams(currentParams);
                                    }}  >
                                        {items}
                                    </FilterItem>
                                ))}
                            </FilterDropdown>
                        </Filter>
                    </div>

                </div>

            </div>
            <div className="bikes-container">
                {bikes}
            </div>
        </div>
    )
}