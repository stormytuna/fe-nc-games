import axios from "axios";
import { useState } from "react";

export function Review({ title, designer, owner, review_img_url, category, created_at, votes, review_body, review_id }) {
  const [currentVotes, setCurrentVotes] = useState(votes);
  const [isDisabled, setIsDisabled] = useState(false);

  function handleVoting(e) {
    const incVotes = e.target.classList.contains("UpVote") ? 1 : -1;
    axios
      .patch(`https://be-nc-games.onrender.com/api/reviews/${review_id}`, { inc_votes: incVotes })
      .then((response) => {
        setCurrentVotes(votes + incVotes);
        setIsDisabled(true);
      })
      .catch((e) => {
        console.error(e);
        window.alert("ERROR: Could not contact the server, try again later");
      });
  }

  return (
    <div className="Review" id={review_id}>
      <div className="ImageAndVotes">
        <img src={review_img_url} alt={title} />
        <p>Votes: {currentVotes}</p>
      </div>
      <div className="UpVoteAndDownVote">
        <button className="UpVote" disabled={isDisabled} onClick={handleVoting}>
          +1
        </button>
        <button className="DownVote" disabled={isDisabled} onClick={handleVoting}>
          -1
        </button>
      </div>
      <h3>{title}</h3>
      <div className="ReviewInfo">
        <span className="Designer">by {designer}</span>
        <span className="Category">{category}</span>
        <span className="CreatedAt">{created_at}</span>
        <span className="Owner">review by {owner}</span>
      </div>
      <p className="ReviewBody">{review_body}</p>
    </div>
  );
}
