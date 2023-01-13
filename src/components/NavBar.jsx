import { Link } from "react-router-dom";

export function NavBar() {
  return (
    <div className="NavBar">
      <Link to="/">Reviews</Link>
      <Link to="/AddReview">Add Review</Link>
    </div>
  );
}
