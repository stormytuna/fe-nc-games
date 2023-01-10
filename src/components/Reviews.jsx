import { useEffect, useState } from "react";
import { getReviews } from "../api";
import { Review } from "./Review";

export function Reviews() {
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getReviews()
      .then((reviews) => {
        setReviews(reviews);
        setIsLoading(false);
      })
      .catch((e) => {
        console.error(e);
        window.alert("ERROR: Could not contact the server, try again later");
      });
  }, []);

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

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
