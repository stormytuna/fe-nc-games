export function Review({ title, designer, owner, review_img_url, category, created_at, votes, review_body }) {
  return (
    <div className="Review">
      <h3>{title}</h3>
      <div className="ReviewInfo">
        <span className="Designer">by {designer}</span>
        <span className="Category">{category}</span>
        <span className="CreatedAt">{created_at}</span>
        <span className="Owner">review by {owner}</span>
      </div>

      <span className="Votes">Votes: {votes}</span>
      <span className="ReviewBody">{review_body}</span>
      <img src={review_img_url} alt="" />
    </div>
  );
}
