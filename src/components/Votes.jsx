import { useState } from "react";
import { patchVotes } from "../api";

export function Votes({ setCurrentVotes, reviewId }) {
  const [isDisabled, setIsDisabled] = useState(false);

  function handleVoting(e) {
    setCurrentVotes((votes) => votes + incVotes);
    setIsDisabled(true);

    const incVotes = e.target.classList.contains("UpVote") ? 1 : -1;
    patchVotes(reviewId, incVotes).catch((e) => {
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
