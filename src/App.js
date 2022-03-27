import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Container} from 'react-bootstrap';
import Layout from './components/layouts/Layout';
import {getTaskData} from './components/services/TaskServices';
import TaskCreate from './components/tasks/TaskCreate';
import TaskList from './components/tasks/TaskList';
import './styles/custom-styles.css'

function App() {
  
  const [isCreateMode, setIsCreateMode] = useState(false);
  const [tasks, setTaks] = useState([]);

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [priority, setPriority] = useState('');

  useEffect(() => {
    //Call api and data
    initializeData();
  }, []);

  const initializeData = async () => {
   const data = await getTaskData();
   setTaks(data);
  }

  const createTask = (e) => {
    e.preventDefault();
    // Validate data
    if(title.length === 0){
      alert('Please give a tittle!');
      return false;
    }
    const taskItem = {
      Title: title,
      Priority: priority
    }

    const data = axios.post('https://todo-app37.herokuapp.com/addTodo', taskItem)
    .then(res => {
      console.log(res.data);
       return res.data;
    })

    const taskData = tasks;
    // taskData.push(taskItem);
    taskData.unshift(taskItem);
    setTaks(taskData);
    setTitle('');
    setDescription('');
    setPriority('');
  }

  return (
    <div className="App">
        <Layout>
            <Container>
              {/* Task Create Page */}
              {
                isCreateMode && (
                  <TaskCreate 
                  title={title}
                  description={description}
                  priority={priority}
                  setTitle={(val) => setTitle(val)}
                  setDescription={(val) => setDescription(val)}
                  setPriority={(val) => setPriority(val)}
                  createTask={(val) => createTask(val)} />
                )
              }
            <TaskList tasks={tasks} setIsCreateMode={setIsCreateMode} isCreateMode={isCreateMode} />
          </Container>
        </Layout>
    </div>
  );
}

export default App;
