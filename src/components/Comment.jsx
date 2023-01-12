import { deleteComment } from "../api";
import { formatDate } from "../utils";

export function Comment({ body, votes, author, created_at, comment_id, setComments }) {
  function handleDeleteComment(e) {
    deleteComment(comment_id)
      .then(() => {
        setComments((currentComments) => {
          return currentComments.filter((comment) => {
            return comment.comment_id !== comment_id;
          });
        });
      })
      .catch((e) => {
        console.error(e);
        window.alert("ERROR: Could not contact the server, try again later");
      });
  }

  return (
    <div className="Comment">
      <p>
        <span className="Author">{author}</span> <span className="Timestamp">[{formatDate(created_at)}]</span>: {body}
      </p>
      <button disabled>Votes: {votes}</button>
      <button className="Delete" onClick={handleDeleteComment} disabled={author !== "jessjelly"}>
        Delete
      </button>
    </div>
  );
}
