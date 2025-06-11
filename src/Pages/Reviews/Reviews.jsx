import React from "react"
import "./Reviews.css"
import bikeImage from "../../assets/img/reviews_img.avif"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faStar } from "@fortawesome/free-solid-svg-icons"
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons"

import { getReviews } from "../../../apiReviews.js"


export default function Reviews() {

    const [reviews, setReviews] = React.useState([]);
    const [reviewsError, setReviewsError] = React.useState(null);
    

    React.useEffect(() => {
        async function fetchReviews() {
            try {
                const reviews = await getReviews();
                setReviews(reviews);
                console.log(reviews);
            } catch (error) {
                setReviewsError(error);
                console.error("Error fetching reviews:", error);
            }
        }

        fetchReviews();
    }, []);

    
    if (reviewsError) {
        return <p className="errorMessage">Error: <span className="error">{error.message}</span></p>
    }

    const review = reviews.length >0 && reviews.map((review) => (
      
        <div className="review-card" key={review.id}>
            <h3>{review.name}</h3>
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
                        <div className="star-rating-count">
                            <input type="checkbox" id="5-star" name="rating" value="5" />
                            <div>
                                <FontAwesomeIcon icon={faStar} className="star-icon" />
                                <FontAwesomeIcon icon={faStar} className="star-icon" />
                                <FontAwesomeIcon icon={faStar} className="star-icon" />
                                <FontAwesomeIcon icon={faStar} className="star-icon" />
                                <FontAwesomeIcon icon={faStar} className="star-icon" />
                                <span>(846)</span>
                            </div>
                        </div>
                        <div className="star-rating-count">
                            <input type="checkbox" id="4-star" name="rating" value="4" />
                            <div>
                                <FontAwesomeIcon icon={faStar} className="star-icon" />
                                <FontAwesomeIcon icon={faStar} className="star-icon" />
                                <FontAwesomeIcon icon={faStar} className="star-icon" />
                                <FontAwesomeIcon icon={faStar} className="star-icon" />
                                <span>(725)</span>
                            </div>
                        </div>
                        <div className="star-rating-count">
                            <input type="checkbox" id="3-star" name="rating" value="3" />
                            <div>
                                <FontAwesomeIcon icon={faStar} className="star-icon" />
                                <FontAwesomeIcon icon={faStar} className="star-icon" />
                                <FontAwesomeIcon icon={faStar} className="star-icon" />
                                <span>(230)</span>
                            </div>
                        </div>
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
                <h3>Latest Customers Reviews</h3>
                <div className="latest-reviews-cards">
                    {review}
        
                </div>
            </div>
        </div >

    )
}