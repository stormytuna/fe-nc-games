import { useEffect, useState } from "react";
import { getComments, postComment } from "../api";
import { Comment } from "./Comment";
import { Error } from "./Error";

export function Comments({ reviewId }) {
  const [isActive, setIsActive] = useState(false);
  const [comments, setComments] = useState([]);
  const [commentText, setCommentText] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    getComments(reviewId)
      .then((comments) => {
        setComments(comments);
      })
      .catch((e) => {
        console.error(e);
        setError("Encountered an issue fetching comments, please try again later");
      });
  }, [isActive]);

  function handleSubmitComment(e) {
    e.preventDefault();
    setCommentText("");

    postComment(reviewId, commentText)
      .then((newComment) => {
        setComments((curComments) => {
          return [newComment, ...curComments];
        });
      })
      .catch((e) => {
        console.error(e);
        setError("Encountered an issue posting a comment, please try again later");
      });
  }

  if (error) {
    return <Error error={error} />;
  }

  return (
    <div className="Comments">
      {comments.map((comment) => {
        return <Comment {...comment} />;
      })}
      <div className="AddComment">
        <form>
          <input className="Text" type="text" placeholder="Write a comment..." onChange={(e) => setCommentText(e.target.value)} value={commentText} />
          <button className="Submit" onClick={handleSubmitComment}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
