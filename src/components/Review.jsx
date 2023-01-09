import axios from "axios";
import { useState } from "react";

export function Review({ title, designer, owner, review_img_url, category, created_at, votes, review_body, review_id }) {
  const [currentVotes, setCurrentVotes] = useState(votes);
  const [isDisabled, setIsDisabled] = useState(false);

  function handleUpvote(e) {
    axios
      .patch(`https://be-nc-games.onrender.com/api/reviews/${e.target.parentNode.id}`, { inc_votes: 1 })
      .then((response) => {
        setCurrentVotes(votes + 1);
        setIsDisabled(true);
      })
      .catch((e) => {
        console.error(e);
        window.alert("ERROR: Could not contact the server, try again later");
      });
  }

  return (
    <div className="Review" id={review_id}>
      <img src={review_img_url} alt={title} />
      <h3>{title}</h3>
      <div className="ReviewInfo">
        <span className="Designer">by {designer}</span>
        <span className="Category">{category}</span>
        <span className="CreatedAt">{created_at}</span>
        <span className="Owner">review by {owner}</span>
      </div>
      <button className="Votes" disabled={isDisabled} onClick={handleUpvote}>
        Votes: {currentVotes}
      </button>
      <p className="ReviewBody">{review_body}</p>
    </div>
  );
}
