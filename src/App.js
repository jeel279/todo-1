import React, { useState, useEffect } from 'react';
// import { Table } from '@nextui-org/react';
import './App.css';

import Controller from './Controller.js';
import AddTask from './addTask';
import { Text } from '@nextui-org/react';
export default function App() {
  const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem('tasks')==null ? "[]" : localStorage.getItem('tasks')));
  


  // var completedTasks = tasks.filter((task) => task.is_done);
  // var pendingTasks = tasks.filter((task) => !task.is_done);

  useEffect(() => {
    localStorage.setItem('tasks',JSON.stringify(tasks));
  }, [tasks]);

  return (
    <div style={{padding: '1.2rem' }}>
      <div className='header'>

        <Text b size={25}>Todo List</Text>
        <AddTask setList={setTasks} />
      </div>

      <br/>


      <Controller list={tasks} setList={setTasks} />

      {/* <Card shadow isHoverable variant="bordered">
          <Card.Header>Pending Tasks  </Card.Header>
          <Card.Body>
    {tasks.flatMap((task, index) => !task.is_done ? (
      <div key={index}>
        <p>Sr. No: {index + 1}</p>
        <p>Title: {task.title}</p>
        <p>Description: {task.desc}</p>
        <Checkbox
          checked={task.is_done}
          onChange={() => toggleMark(index)}
          label="Mark As Done"
        />
        <Button
          onClick={() => deleteTask(index)}
          auto
          color="error"
          size="small"
        >
          Delete
        </Button>
      </div>
    ) : null)}
  </Card.Body>
</Card>

      


<Card shadow>
  <Card.Header>Completed Todos</Card.Header>
  <Card.Body>
    {tasks.flatMap((task, index) => task.is_done ? (
      <div key={index}>
        <p>Sr. No: {index + 1}</p>
        <p>Title: {task.title}</p>
        <p>Description: {task.desc}</p>
        <Checkbox
          checked={task.is_done}
          onChange={() => toggleMark(index)}
          label="Mark As Undone"
        />
        <Button
          onClick={() => deleteTask(index)}
          auto
          color="error"
          size="small"
        >
          Delete
        </Button>
      </div>
    ) : null)}
  </Card.Body>
</Card> */}
    </div>
  );
}
