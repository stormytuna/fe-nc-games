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

  return (
    <div className="Comments">
      {comments.map((comment) => {
        return <Comment {...comment} />;
      })}
    </div>
  );
}
