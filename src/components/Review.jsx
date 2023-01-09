import { Comments } from "./Comments";

export function Review({ title, designer, owner, review_img_url, category, created_at, votes, review_body, review_id }) {
  return (
    <div className="Review">
      <img src={review_img_url} alt={title} />
      <h3>{title}</h3>
      <div className="ReviewInfo">
        <span className="Designer">by {designer}</span>
        <span className="Category">{category}</span>
        <span className="CreatedAt">{created_at}</span>
        <span className="Owner">review by {owner}</span>
      </div>
      <span className="Votes">Votes: {votes}</span>
      <p className="ReviewBody">{review_body}</p>
      <Comments reviewId={review_id} />
    </div>
  );
}
