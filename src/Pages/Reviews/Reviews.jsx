import React from "react"
import "./Reviews.css"
import bikeImage from "../../assets/img/reviews_img.avif"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faStar } from "@fortawesome/free-solid-svg-icons"


export default function Reviews() {
    return (
        <div className="reviews-container">
            <div className="reviews-header">
                <div className="reviews-page-intro">
                    <h1>What Our Customers Say</h1>
                    <p>Join thousands of happy cyclists who've explored cities with our premium bike rentals.</p>
                    <div className="reviews-count">
                        <div className="star-rating">
                            <ul className="star-list">
                                <li><FontAwesomeIcon icon={faStar} /></li>
                                <li><FontAwesomeIcon icon={faStar} /></li>
                                <li><FontAwesomeIcon icon={faStar} /></li>
                                <li><FontAwesomeIcon icon={faStar} /></li>
                                <li><FontAwesomeIcon icon={faStar} /></li>
                            </ul>
                            <p>4.8/5</p>
                        </div>
                        <p>Based on 1,235 reviews </p>
                    </div>
                </div>
                <img src={bikeImage} alt="image of a bike against a wall" />
            </div>
        </div >

    )
}