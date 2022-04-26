import React from 'react';

import styles from './App.module.css';
import TaskList from './Components/Tasks/TaskList';

const DUMMY_LIST = [
  {
    id: 'i1',
    text: 'item 1'
  },{
    id: 'i2',
    text: 'item 2'
  }
]

function App() {
  return (
    <div className={styles.app}>
      <TaskList itemsList={DUMMY_LIST} />
    </div>
  );
}

export default App;
