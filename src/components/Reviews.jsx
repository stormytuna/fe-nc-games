import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { getReviews } from "../api";
import { Review } from "./Review";

export function Reviews({ chosenCategory, chosenSortBy }) {
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    setIsLoading(true);

    const urlParams = new URLSearchParams(searchParams);
    if (chosenCategory !== "all") {
      urlParams.set("category", chosenCategory);
    }
    const [sortBy, order] = chosenSortBy.split(":");
    urlParams.set("sort_by", sortBy);
    urlParams.set("order", order);

    setSearchParams(urlParams);

    getReviews(urlParams)
      .then((reviews) => {
        setReviews(reviews);
        setIsLoading(false);
      })
      .catch((e) => {
        console.error(e);
        window.alert("ERROR: Could not contact the server, try again later");
      });
  }, [chosenCategory, chosenSortBy]);

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
