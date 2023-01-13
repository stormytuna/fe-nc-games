import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { getReviews } from "../api";
import { Error } from "./Error";
import { Loading } from "./Loading";
import { Review } from "./Review";

export function Reviews({ chosenCategory, chosenSortBy }) {
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchParams, setSearchParams] = useSearchParams();
  const [error, setError] = useState("");

  useEffect(() => {
    setIsLoading(true);

    const urlParams = new URLSearchParams(searchParams);
    if (chosenCategory !== "-- choose a category --") {
      urlParams.set("category", chosenCategory);
    } else {
      urlParams.delete("category");
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
        setError("Encountered an issue fetching reviews, try again later!");
        setIsLoading(false);
      });
  }, [chosenCategory, chosenSortBy]);

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <Error error={error} />;
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
