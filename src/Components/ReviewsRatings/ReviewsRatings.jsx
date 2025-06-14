import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faStar} from "@fortawesome/free-solid-svg-icons"

export default function RatingFilterRow({ rating, count }) {
    return (
      <div className="star-rating-count">
        <input
          type="checkbox"
          id={`${rating}-star`}
          name="rating"
          value={rating}
        />
        <div>
          {Array.from({ length: rating }, (_, i) => (
            <FontAwesomeIcon key={i} icon={faStar} className="star-icon" />
          ))}
          <span>({count})</span>
        </div>
      </div>
    );
  }
  