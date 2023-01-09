import axios from "axios";
import { useEffect, useState } from "react";
import { Comment } from "./Comment";

export function Comments({ reviewId }) {
  const [isActive, setIsActive] = useState(false);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    console.log(reviewId);

    axios
      .get(`https://be-nc-games.onrender.com/api/reviews/${reviewId}/comments`)
      .then((response) => {
        setComments(response.data.comments);
      })
      .catch((e) => {
        console.error(e);
        window.alert("ERROR: Could not contact the server, try again later");
      });
  }, [isActive]);

  if (!isActive) {
    return (
      <div className="Comments Inactive">
        <button onClick={() => setIsActive(!isActive)}>show comments ({comments.length})</button>
      </div>
    );
  }

  return (
    <div className="Comments Active">
      <button onClick={() => setIsActive(!isActive)}>hide comments</button>
      {comments.map((comment) => {
        return <Comment {...comment} />;
      })}
    </div>
  );
}
