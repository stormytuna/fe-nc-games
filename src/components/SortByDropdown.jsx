import { useEffect } from "react";

export function SortByDropdown({ chosenSortBy, setChosenSortBy }) {
  return (
    <select className="Dropdown" name="SortBy" value={chosenSortBy} onChange={(e) => setChosenSortBy(e.target.value)}>
      <option value="created_at:asc">Date ascending</option>
      <option value="created_at:desc">Date descending</option>
      <option value="comment_count:asc">Comment count ascending</option>
      <option value="comment_count:desc">Comment count descending</option>
      <option value="votes:asc">Votes ascending</option>
      <option value="votes:desc">Votes descending</option>
    </select>
  );
}
