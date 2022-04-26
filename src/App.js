import React, { useEffect, useState } from "react";

import styles from "./App.module.css";
import AddTask from "./Components/AddTask/AddTask";
import TaskList from "./Components/Tasks/TaskList";

const FIREBASE_URL =
  "https://henriquemazzoleni-task-default-rtdb.europe-west1.firebasedatabase.app/tasks";

function App() {
  const [taskList, setTaskList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const fetchTaskList = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(FIREBASE_URL + ".json");
      if (!response.ok) throw new Error('Fetch request failed!')
      const data = await response.json();

      let newList = [];
      for (let key in data) {
        newList.unshift({
          id: key,
          text: data[key].text,
        });
      }
      setTaskList(newList);
    } catch (error) {
      setError(error.message || 'Something went wrong')
    } finally {
      setIsLoading(false)
    }
  };

  useEffect(() => {
    fetchTaskList();
  }, []);

  const addTaskHandler = async (task) => {
    if (task.trim().length === 0) return;

    setIsLoading(true)
    try {
      const response = await fetch(FIREBASE_URL + ".json", {
        method: "POST",
        body: JSON.stringify({ text: task }),
      });
      if (!response.ok) throw new Error('Add request failed!')
      fetchTaskList();
    } catch (error) {
      setError(error.message || 'Something went wrong')
    } finally {
      setIsLoading(false)
    }
  };

  const removeTaskHandler = async (id) => {
    setIsLoading(true)
    try {
      const response = await fetch(FIREBASE_URL + `/${id}.json`, {
        method: "DELETE",
      });
      if (!response.ok) throw new Error('Delete request failed!')
      fetchTaskList();
    } catch (error) {
      setError(error.message || 'Something went wrong')
    } finally {
      setIsLoading(false)
    }
  };

  let displayMessage = '';

  if (taskList.length === 0) displayMessage = 'No tasks found. Start adding some!';

  if (error) displayMessage = error;

  if (isLoading) displayMessage = 'Loading';
  
  return (
    <div className={styles.app}>
      <AddTask onAddTask={addTaskHandler} />
      <TaskList itemsList={taskList} onRemoveTask={removeTaskHandler} message={displayMessage}/>
    </div>
  );
}

export default App;
