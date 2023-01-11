import { useEffect, useState } from "react";
import { getCategories } from "../api";

export function CategoriesDropdown({ chosenCategory, setChosenCategory }) {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((categories) => {
      const fetchedCategoySlugs = categories.map((category) => category.slug);
      const newCategories = ["all", ...fetchedCategoySlugs];
      setCategories(newCategories);
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
