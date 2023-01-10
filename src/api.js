import axios from "axios";

export function getReviews() {
  return axios.get("https://be-nc-games.onrender.com/api/reviews").then((res) => res.data.reviews);
}

export function getReview(reviewId) {
  return axios.get(`https://be-nc-games.onrender.com/api/reviews/${reviewId}`).then((res) => res.data.review);
}

export function getComments(reviewId) {
  return axios.get(`https://be-nc-games.onrender.com/api/reviews/${reviewId}/comments`).then((res) => res.data.comments);
}

export function postComment(reviewId, commentText) {
  // Hard coding username, in a real life example this would be handled by some authentification system
  return axios.post(`https://be-nc-games.onrender.com/api/reviews/${reviewId}/comments`, { body: commentText, username: "jessjelly" }).then((res) => res.data.comment);
}

export function patchVotes(reviewId, incVotes) {
  return axios.patch(`https://be-nc-games.onrender.com/api/reviews/${reviewId}`, { inc_votes: incVotes }).then((res) => res.data.review);
}
