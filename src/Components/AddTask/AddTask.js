import React, { useRef } from "react";

import styles from './AddTask.module.css';

const AddTask = props => {
    const taskInput = useRef()

    const submitHandler = (e) => {
        e.preventDefault()

        props.onAddTask(taskInput.current.value)
        taskInput.current.value = ''
    }

    return <form className={styles.form} onSubmit={submitHandler}>
        <input ref={taskInput} />
        <button type="submit">Add Task</button>
    </form>
};

export default AddTask;