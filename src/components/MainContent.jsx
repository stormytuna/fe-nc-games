import { useState } from "react";
import { CategoriesDropdown } from "./CategoriesDropdown";
import { Reviews } from "./Reviews";
import { SortByDropdown } from "./SortByDropdown";

export function MainContent() {
  const [chosenCategory, setChosenCategory] = useState("-- choose a category --");
  const [chosenSortBy, setChosenSortBy] = useState("votes:desc");

  return (
    <div>
      <CategoriesDropdown chosenCategory={chosenCategory} setChosenCategory={setChosenCategory} />
      <SortByDropdown chosenSortBy={chosenSortBy} setChosenSortBy={setChosenSortBy} />
      <Reviews chosenCategory={chosenCategory} chosenSortBy={chosenSortBy} />
    </div>
  );
}
