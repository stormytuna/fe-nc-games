import axios from "axios";
import { useEffect, useState } from "react";
import { getReviews } from "../api";
import { Review } from "./Review";

export function Reviews() {
  const [reviews, setReviews] = useState([]);
  const [categories, setCategories] = useState([]);
  const [chosenCategory, setChosenCategory] = useState("all");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const urlParams = {};
    if (chosenCategory !== "all") {
      urlParams.category = chosenCategory;
    }

    getReviews(urlParams)
      .then((reviews) => {
        setReviews(reviews);
        setIsLoading(false);

        return axios.get("https://be-nc-games.onrender.com/api/categories");
      })
      .then((response) => {
        const fetchedCategories = response.data.categories;
        const fetchedCategoySlugs = fetchedCategories.map((category) => category.slug);
        const newCategories = ["all", ...fetchedCategoySlugs];
        setCategories(newCategories);
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
      <select name="Category" onChange={(e) => setChosenCategory(e.target.value)}>
        {categories.map((category) => {
          return <option value={category}>{category}</option>;
        })}
      </select>
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
