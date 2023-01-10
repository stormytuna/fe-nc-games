import axios from "axios";
import { useState } from "react";

export function Votes({ setCurrentVotes, reviewId }) {
  const [isDisabled, setIsDisabled] = useState(false);

  function handleVoting(e) {
    const incVotes = e.target.classList.contains("UpVote") ? 1 : -1;
    axios
      .patch(`https://be-nc-games.onrender.com/api/reviews/${reviewId}`, { inc_votes: incVotes })
      .then((response) => {
        setCurrentVotes((votes) => votes + incVotes);
        setIsDisabled(true);
      })
      .catch((e) => {
        console.error(e);
        window.alert("ERROR: Could not contact the server, try again later");
      });
  }

  return (
    <div className="Votes">
      <button className="UpVote" disabled={isDisabled} onClick={handleVoting}>
        +1
      </button>
      <button className="DownVote" disabled={isDisabled} onClick={handleVoting}>
        -1
      </button>
    </div>
  );
}
