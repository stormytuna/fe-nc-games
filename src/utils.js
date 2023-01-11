export function formatDate(timestamp) {
  const date = new Date(timestamp);
  return `${date.toDateString()} at ${date.toLocaleTimeString()}`;
}
