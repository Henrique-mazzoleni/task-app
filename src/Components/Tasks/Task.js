import React from "react";

import styles from "./Task.module.css";

const Task = (props) => {
  const deleteHandler = () => {
      props.onDelete(props.id)
  }

  return <li onClick={deleteHandler} className={styles.task}>
    {props.text}
  </li>;
};

export default Task;
