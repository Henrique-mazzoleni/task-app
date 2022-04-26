import React from "react";
import Task from "./Task";

import styles from './TaskList.module.css';

const TaskList = props => {
    const removeTaskHandler = (id) => {
        props.onRemoveTask(id)
    }

    const taskItemsList = props.itemsList.map(item => <Task id={item.id} text={item.text} onDelete={removeTaskHandler} />)

    if (taskItemsList.length === 0) {
        return <div className={styles.list}>
            <h2>No tasks found. Start adding some!</h2>
        </div>
    }

    return <ul className={styles.list}>{taskItemsList}</ul>
};

export default TaskList;