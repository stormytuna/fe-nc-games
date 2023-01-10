import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getReview } from "../api";
import { Comments } from "./Comments";
import { Review } from "./Review";

export function IndividualReview() {
  const { review_id } = useParams();
  const [review, setReview] = useState({});

  useEffect(() => {
    getReview(review_id)
      .then((review) => {
        setReview(review);
      })
      .catch((e) => {
        console.error(e);
        window.alert("ERROR: Could not contact the server, try again later");
      });
  }, []);

  return (
    <div className="Reviews">
      <Review {...review} />
      <Comments reviewId={review_id} />
    </div>
  );
}
