import React from "react"
import "./Reviews.css"
import bikeImage from "../../assets/img/reviews_img.avif"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faStar, faPenToSquare, faLocationDot, faBicycle } from "@fortawesome/free-solid-svg-icons"

import { getUserInfo } from "../../../apiUsers.js"
import RatingFilterRow from "../../Components/ReviewsRatings/ReviewsRatings.jsx"

export default function Reviews() {

    const [user, setUser] = React.useState([]);
    const [userError, setUserError] = React.useState(null);


    React.useEffect(() => {
        async function fetchUserData() {
            try {
                const data = await getUserInfo();
                setUser(data);
                console.log(data);
            } catch (error) {
                setUserError(error);
                console.error("Error fetching user info:", error);
            }
        }
        fetchUserData();
    }, []);



    const userCards = user.length > 0 && user.map((user) => (
        <div className="review-card" key={user.id}>
            <div className="review-member-info">
                <div className="user-details">
                    <img src={user.avatarImg} className="avatar-img" alt={`${user.name}'s avatar`} />
                    <h3>{user.name}</h3>
                </div>
                <div className="review-rating">
                    {Array.from({ length: 5 }, (_, i) => (
                        <FontAwesomeIcon
                            key={i}
                            icon={faStar}
                            style={{ color: i < user.review?.rating ? "#f5c518" : "#ccc" }}
                        />
                    ))}
                </div>
            </div>
            <div className="review-info">
                <p className="review-content">{user.review?.content}</p>
                <div className="date-location">
                    <p>{user.review?.date}</p>
                    <p><FontAwesomeIcon icon={faBicycle} className="review-icons" />{user.review?.bikeType} bike ~ <FontAwesomeIcon icon={faLocationDot} className="review-icons" />{user.location} </p>
                </div>
            </div>
        </div>

    ))


    return (
        <div className="reviews-container">
            {/* Reviews Header */}
            <div className="reviews-header">
                <div className="reviews-page-intro">
                    <h1>What Our Customers Say</h1>
                    <p>Join thousands of happy cyclists who've explored cities with our premium bike rentals.</p>
                    <div className="reviews-count">
                        <div className="star-rating">
                            <ul className="star-list">
                                <li><FontAwesomeIcon icon={faStar} className="star-icon" /></li>
                                <li><FontAwesomeIcon icon={faStar} className="star-icon" /></li>
                                <li><FontAwesomeIcon icon={faStar} className="star-icon" /></li>
                                <li><FontAwesomeIcon icon={faStar} className="star-icon" /></li>
                                <li><FontAwesomeIcon icon={faStar} className="star-icon" /></li>
                            </ul>
                            <p>4.8/5</p>
                        </div>
                        <p>Based on 1,235 reviews </p>
                    </div>
                </div>
                <img src={bikeImage} alt="image of a bike against a wall" />
            </div>
            {/* Filter reviews */}
            <div className="filter-reviews-container">
                <div className="leave-review-cta">
                    <h2>Filter Reviews</h2>
                    <button> <FontAwesomeIcon icon={faPenToSquare} />Leave a Review</button>
                </div>
                {/* rating-sort reviews */}
                <div className="sort-reviews">
                    <div className="rating">
                        <h3>Rating</h3>
                        <RatingFilterRow rating={5} count={846} />
                        <RatingFilterRow rating={4} count={725} />
                        <RatingFilterRow rating={3} count={230} />
                    </div>

                    <div className="bike-type-selection">
                        <h3>Bike type</h3>
                        <div className="bike-by-type">
                            <div>
                                <input type="checkbox" id="mountain" name="rating" value="mountain" />
                                <label htmlFor="mountain"> Mountain bikes</label>
                            </div>
                            <div>
                                <input type="checkbox" id="road" name="rating" value="road" />
                                <label htmlFor="road"> Road bikes</label>
                            </div>
                            <div>
                                <input type="checkbox" id="electric" name="rating" value="electric" />
                                <label htmlFor="electric"> Electric bikes</label>
                            </div>
                            <div>
                                <input type="checkbox" id="kids" name="rating" value="kids" />
                                <label htmlFor="kids"> Kids bikes</label>
                            </div>
                        </div>
                    </div>
                    <div className="location">
                        <h3>Location</h3>
                        <select>
                            <option>All Locations</option>
                            <option>New York</option>
                            <option>London</option>
                            <option>Barcelona</option>
                            <option>Milan</option>
                            <option>Berlin</option>
                        </select>
                    </div>
                </div>
            </div>
            {/* Latest customers reviews */}
            <div className="latest-reviews-container">
                <h2>Latest Customers Reviews</h2>
                <div className="latest-reviews-cards">
                    {userCards}
                </div>
            </div>
        </div >

    )
}