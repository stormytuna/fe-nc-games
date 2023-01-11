import { useState } from "react";
import { Votes } from "./Votes";
import { Link } from "react-router-dom";
import { formatDate } from "../utils";

export function Review({ title, designer, owner, review_img_url, category, created_at, votes, review_body, review_id, comment_count }) {
  const [currentVotes, setCurrentVotes] = useState(votes);

  return (
    <div className="Review" id={review_id}>
      <div className="ImageAndVotes">
        <img src={review_img_url} alt={title} />
        <p>Votes: {currentVotes}</p>
        <Votes setCurrentVotes={setCurrentVotes} reviewId={review_id} />
      </div>
      <Link to={`/Reviews/${review_id}`} className="Title">
        {title}
      </Link>
      <div className="ReviewInfo">
        <span className="Designer">by {designer}</span>
        <span className="Category">{category}</span>
        <span className="CreatedAt">{formatDate(created_at)}</span>
        <span className="Owner">review by {owner}</span>
        <span className="CommentCount">comments: {comment_count}</span>
      </div>
      <p className="ReviewBody">{review_body}</p>
    </div>
  );
}
