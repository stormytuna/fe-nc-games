import axios from "axios";

export function patchVotes(reviewId, incVotes) {
  return axios.patch(`https://be-nc-games.onrender.com/api/reviews/${reviewId}`, { inc_votes: incVotes }).then((res) => res.data.review);
}
