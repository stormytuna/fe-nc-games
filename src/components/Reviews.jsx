import { useEffect, useState } from "react";
import { getReviews } from "../api";
import { CategoriesDropdown } from "./CategoriesDropdown";
import { Review } from "./Review";
import { SortByDropdown } from "./SortByDropdown";

export function Reviews() {
  const [reviews, setReviews] = useState([]);
  const [chosenCategory, setChosenCategory] = useState("all");
  const [chosenSortBy, setChosenSortBy] = useState("votes:desc");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);

    const urlParams = new URLSearchParams();
    if (chosenCategory !== "all") {
      urlParams.append("category", chosenCategory);
    }
    const [sortBy, order] = chosenSortBy.split(":");
    urlParams.append("sort_by", sortBy);
    urlParams.append("order", order);

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
      <CategoriesDropdown chosenCategory={chosenCategory} setChosenCategory={setChosenCategory} />
      <SortByDropdown chosenSortBy={chosenSortBy} setChosenSortBy={setChosenSortBy} />
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
