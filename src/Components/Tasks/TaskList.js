import React from "react";
import Task from "./Task";

import styles from './TaskList.module.css';

const TaskList = props => {
    const removeTaskHandler = (id) => {
        props.onRemoveTask(id)
    }

    const taskItemsList = props.itemsList.map(item => <Task key={item.id} id={item.id} text={item.text} onDelete={removeTaskHandler} />)

    if (props.message) {
        return <div className={styles.list}>
            <h2>{props.message}</h2>
        </div>
    }

    return <ul className={styles.list}>{taskItemsList}</ul>
};

export default TaskList;