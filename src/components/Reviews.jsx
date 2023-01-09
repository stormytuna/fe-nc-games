import axios from "axios";
import { useEffect, useState } from "react";
import { Review } from "./Review";

export function Reviews() {
  const [filters, setFilters] = useState({});
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    axios
      .get("https://be-nc-games.onrender.com/api/reviews")
      .then((response) => {
        setReviews(response.data.reviews);
        console.log(response.data.reviews[0]);
      })
      .catch((e) => console.error(e));
  }, [filters]);

  return (
    <div className="Reviews">
      <ul>
        {reviews.map((review) => {
          return (
            <li>
              <Review {...review} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
