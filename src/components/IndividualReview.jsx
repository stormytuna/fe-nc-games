import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Comments } from "./Comments";
import { Review } from "./Review";

export function IndividualReview() {
  const { review_id } = useParams();
  const [review, setReview] = useState({});
  const [commentText, setCommentText] = useState("");

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

  function handleSubmitComment(e) {
    e.preventDefault();

    // Hard coding username, in a real life example this would be handled by some authentification system
    axios
      .post(`https://be-nc-games.onrender.com/api/reviews/${review_id}/comments`, { body: commentText, username: "jessjelly" })
      .then((response) => {
        // TODO: Come back after ticket 6 is merged and make this add the submitted comment to our comments
        console.log(response.data.comment);
      })
      .catch((e) => {
        console.error(e);
        window.alert("ERROR: Could not contact the server, try again later");
      });
  }

  return (
    <div className="Reviews">
      <Review {...review} />
      <Comments reviewId={review_id} />
      <div className="AddComment">
        <form>
          <input className="Text" type="text" placeholder="Write a comment..." onChange={(e) => setCommentText(e.target.value)} />
          <input className="Submit" type="submit" value="Submit" onClick={handleSubmitComment} />
        </form>
      </div>
    </div>
  );
}
