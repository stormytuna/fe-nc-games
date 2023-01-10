import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Review } from "./Review";

export function IndividualReview() {
  const { review_id } = useParams();
  const [review, setReview] = useState({});

  useEffect(() => {
    axios
      .get(`https://be-nc-games.onrender.com/api/reviews/${review_id}`)
      .then((response) => {
        setReview(response.data.review);
      })
      .catch((e) => {
        console.error(e);
        window.alert("ERROR: Could not contact the server, try again later");
      });
  }, []);

  return (
    <div className="Reviews">
      <Review {...review} />
    </div>
  );
}
