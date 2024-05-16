import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleCompleted, deleteTask } from "../../../redux/ToDoSlice";
import styles from "./createToDo.module.css";

const CreateTodo = () => {
  const dispatch = useDispatch();

  const tasks = useSelector((state) => state.tasks.tasks);
  const filterStatus = useSelector((state)=>state.filters.status)
  const filterText = useSelector((state) => state.tasks.filterText);
  const filterTasksByStatus = () => {
    if (filterStatus === "all") {
      return tasks;
    } else if (filterStatus === "completed") {
      return tasks.filter(task => task.completed);
    } else if (filterStatus === "active") {
      return tasks.filter(task => !task.completed);
    } 
  };
  const filtredTask = filterTasksByStatus()
  const InitFilteredTasks = filtredTask.filter((task) =>
    task.text.toLowerCase().includes(filterText.toLowerCase())
  );
  const [filteredTasks, setFilteredTasks] = useState(InitFilteredTasks)

  useEffect(() => {
    setFilteredTasks(InitFilteredTasks)
  }, [filterText,tasks,filterStatus]);

  const handleToggleCompleted = (id) => {
    dispatch(toggleCompleted(id));
  };

  const handleDeleteTask = (id) => {
    dispatch(deleteTask(id));
  };

  return (
    <ul>
      {filteredTasks.map(({ id, text, completed }) => (
        <li key={id}>
          <input
            type="checkbox"
            checked={completed}
            onChange={() => handleToggleCompleted(id)}
          />
          <p style={{ textDecoration: completed ? "line-through" : "none" }}>
            {text}
          </p>
          <button type="button" onClick={() => handleDeleteTask(id)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default CreateTodo;
