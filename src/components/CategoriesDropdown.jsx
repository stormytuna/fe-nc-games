import { useEffect, useState } from "react";
import { getCategories } from "../api";

export function CategoriesDropdown({ chosenCategory, setChosenCategory }) {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories()
      .then((categories) => {
        const fetchedCategoySlugs = categories.map((category) => category.slug);
        const newCategories = ["-- choose a category --", ...fetchedCategoySlugs];
        setCategories(newCategories);
      })
      .catch((e) => {
        console.error(e);
        window.alert("ERROR: Could not contact the server, try again later");
      });
  }, []);

  return (
    <select className="Dropdown" name="Category" value={chosenCategory} onChange={(e) => setChosenCategory(e.target.value)}>
      {categories.map((category) => {
        return (
          <option value={category} key={category.slug}>
            {category}
          </option>
        );
      })}
    </select>
  );
}
