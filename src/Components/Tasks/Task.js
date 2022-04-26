import React from "react";

import styles from './Task.module.css';

const Task = props => <li key={props.id} className={styles.task}>{props.text}</li>;

export default Task;