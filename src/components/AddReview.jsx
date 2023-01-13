import { useState } from "react";
import { postReview } from "../api";
import { CategoriesDropdown } from "./CategoriesDropdown";

export function AddReview() {
  const [chosenCategory, setChosenCategory] = useState("-- choose a category --");
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [designedBy, setDesignedBy] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (title === "") {
      window.alert("Title field cannot be empty");
    }
    if (body === "") {
      window.alert("Body field cannot be empty");
    }
    if (designedBy === "") {
      window.alert("Designed By field cannot be empty");
    }
    if (chosenCategory === "-- choose a category --") {
      window.alert("A category must be chosen");
    }

    postReview(title, body, designedBy, chosenCategory)
      .then(() => {
        window.alert("Review posted!");
        setTitle("");
        setBody("");
        setDesignedBy("");
        setChosenCategory("-- choose a category --");
      })
      .catch((e) => {
        console.error(e);
        window.alert("ERROR: Failed to contact the server, please try again later");
      });
  }

  return (
    <div className="AddReview">
      <form>
        <label for="title">Title: </label>
        <input id="title" type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
        <label for="body">Body: </label>
        <input id="body" type="text" value={body} onChange={(e) => setBody(e.target.value)} />
        <label for="designer">Designed by: </label>
        <input id="designer" type="text" value={designedBy} onChange={(e) => setDesignedBy(e.target.value)} />
        <label for="category">Category: </label>
        <CategoriesDropdown chosenCategory={chosenCategory} setChosenCategory={setChosenCategory} />
        <button onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  );
}
