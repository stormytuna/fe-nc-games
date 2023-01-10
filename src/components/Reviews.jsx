import { useEffect, useState } from "react";
import { getReviews } from "../api";
import { CategoriesDropdown } from "./CategoriesDropdown";
import { Review } from "./Review";

export function Reviews() {
  const [reviews, setReviews] = useState([]);
  const [chosenCategory, setChosenCategory] = useState("all");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);

    const urlParams = {};
    if (chosenCategory !== "all") {
      urlParams.category = chosenCategory;
    }

    getReviews(urlParams)
      .then((reviews) => {
        setReviews(reviews);
        setIsLoading(false);
      })
      .catch((e) => {
        console.error(e);
        window.alert("ERROR: Could not contact the server, try again later");
      });
  }, [chosenCategory]);

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div className="Reviews">
      <CategoriesDropdown chosenCategory={chosenCategory} setChosenCategory={setChosenCategory} />
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
