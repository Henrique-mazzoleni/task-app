import React, { useState } from "react";

import styles from "./App.module.css";
import AddTask from "./Components/AddTask/AddTask";
import TaskList from "./Components/Tasks/TaskList";

const DUMMY_LIST = [
  {
    id: "i1",
    text: "item 1",
  },
  {
    id: "i2",
    text: "item 2",
  },
];

function App() {
  const [taskList, setTaskList] = useState(DUMMY_LIST);

  const addTaskHandler = (task) => {
    const newTask = {
      id: Math.random(),
      text: task
    }
    setTaskList((prevList) =>
      [newTask, ...prevList]
    );
  };

  const removeTaskHandler = (id) => {
    setTaskList((prevList) => prevList.filter((task) => task.id !== id));
  };

  return (
    <div className={styles.app}>
      <AddTask onAddTask={addTaskHandler} />
      <TaskList itemsList={taskList} onRemoveTask={removeTaskHandler} />
    </div>
  );
}

export default App;
