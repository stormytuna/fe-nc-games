import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getReview } from "../api";
import { Comments } from "./Comments";
import { Error } from "./Error";
import { Review } from "./Review";

export function IndividualReview() {
  const { review_id } = useParams();
  const [review, setReview] = useState({});
  const [hasError, setHasError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    getReview(review_id)
      .then((review) => {
        setReview(review);
      })
      .catch((e) => {
        console.error(e);
        setHasError(true);
        setErrorMessage("Encountered an issue fetching review, try again later!");
      });
  }, []);

  if (hasError) {
    return <Error errorMessage={errorMessage} />;
  }

  return (
    <div className="Reviews">
      <Review {...review} />
      <Comments reviewId={review_id} />
    </div>
  );
}
