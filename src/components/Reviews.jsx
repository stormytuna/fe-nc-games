import axios from "axios";
import { useEffect, useState } from "react";
import { Review } from "./Review";

export function Reviews() {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    axios
      .get("https://be-nc-games.onrender.com/api/reviews")
      .then((response) => {
        setReviews(response.data.reviews);
      })
      .catch((e) => {
        console.error(e);
        window.alert("ERROR: Could not contact the server, try again later");
      });
  }, []);

  return (
    <div className="Reviews">
      <ul>
        {reviews.map((review) => {
          return (
            <li key={review.review_id}>
              <Review {...review} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
