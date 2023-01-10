import axios from "axios";
import { useEffect, useState } from "react";
import { Comment } from "./Comment";

export function Comments({ reviewId }) {
  const [isActive, setIsActive] = useState(false);
  const [comments, setComments] = useState([]);
  const [commentText, setCommentText] = useState("");

  useEffect(() => {
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

  function handleSubmitComment(e) {
    e.preventDefault();
    setCommentText("");

    // Hard coding username, in a real life example this would be handled by some authentification system
    axios
      .post(`https://be-nc-games.onrender.com/api/reviews/${reviewId}/comments`, { body: commentText, username: "jessjelly" })
      .then((response) => {
        const newComment = response.data.comment;
        setComments((curComments) => {
          return [newComment, ...curComments];
        });
      })
      .catch((e) => {
        console.error(e);
        window.alert("ERROR: Could not contact the server, try again later");
      });
  }

  return (
    <div className="Comments">
      {comments.map((comment) => {
        return <Comment {...comment} />;
      })}
      <div className="AddComment">
        <form>
          <input className="Text" type="text" placeholder="Write a comment..." onChange={(e) => setCommentText(e.target.value)} value={commentText} />
          <input className="Submit" type="submit" value="Submit" onClick={handleSubmitComment} />
        </form>
      </div>
    </div>
  );
}
