export function Comment({ body, votes, author, created_at }) {
  return (
    <div className="Comment">
      <p>
        <span className="Author">{author}</span> <span className="Timestamp">[{created_at}]</span>: {body}
      </p>
      <button disabled>Votes: {votes}</button>
    </div>
  );
}
