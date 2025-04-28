import React, { useState } from "react";

function NewTaskForm({ categories, onTaskFormSubmit }) {
  const [details, setDetails] = useState("");
  const [selectCategory, setCategory] = useState(categories[1]); 

  function handleSubmit(e) {
    e.preventDefault();
    const newTask = {
      text: details,
      category: selectCategory,
    };
    onTaskFormSubmit(newTask);
    setDetails(""); 
    setCategory(categories[1]); 
  }

  const newCategories = categories.filter((cat) => cat !== "All");

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input
          type="text"
          name="text"
          value={details}
          onChange={(e) => setDetails(e.target.value)}
        />
      </label>
      <label>
        Category
        <select
          name="category"
          value={selectCategory}
          onChange={(e) => setCategory(e.target.value)}
        >
          {newCategories.map((category) => (
            <option key={category}>{category}</option>
          ))}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
