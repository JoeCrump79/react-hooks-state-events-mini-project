import React from "react";
import Task from "./Task";

function TaskList({ tasks, deleteTask, selectedCategory = "All" }) {
  const tasksToDisplay = tasks.filter((task) => {
    const category = selectedCategory || "All";
    if (category === "All") return true;
    return task.category === category;
  });

  return (
    <div className="tasks">
      {tasksToDisplay.map((task, index) => (
        <Task
          key={index}
          text={task.text}
          category={task.category}
          deleteTask={deleteTask}
        />
      ))}
    </div>
  );
}

export default TaskList;
