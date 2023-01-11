import axios from "axios";

export function getReviews(urlParams) {
  return axios.get("https://be-nc-games.onrender.com/api/reviews", { params: urlParams }).then((res) => res.data.reviews);
}

export function getCategories() {
  return axios.get("https://be-nc-games.onrender.com/api/categories").then((res) => res.data.categories);
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

export function deleteComment(commentId) {
  return axios.delete(`https://be-nc-games.onrender.com/api/comments/${commentId}`);
}
