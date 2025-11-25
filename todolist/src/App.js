import './App.css';
import Form from "./components/Form"
import List from "./components/List"
import "bootstrap/dist/css/bootstrap.min.css"
import {api} from "./api/api.js"
import { useEffect, useState } from 'react';
import uuid from 'react-uuid'
function App() {
  const [userTask, setTask] = useState([])

  const fetchData = async () => {
    const res = await api.get("/todo-list")
    setTask(res.data)
  }
  useEffect(()=> {
    fetchData()
  },[userTask])

  const createTask = async(userTask) => {
    const data = {
      id: uuid(),
      task: userTask,
      complete: false
    }
    await api.post("/todo-list",data)
  }

  const deleteTask = async(task_id) => {
    await api.delete(`/todo-list/${task_id}`)
  }

  const updateTask = async(task_id, complete)=>{
    await api.patch(`/todo-list/${task_id}`,{complete})
    console.log(complete);
    
  }

  const updateNewTask = async(task_id,task) =>{
    const updateTask = {
      task:task
    }
    await api.patch(`/todo-list/${task_id}`,updateTask)
  }

  return (
    <div className='mx-auto w-50 mt-2'>
      <Form createTask={createTask}/>
      <List userTask={userTask} deleteTask={deleteTask} updateTask={updateTask} updateNewTask={updateNewTask}/>
    </div>
  );
}

export default App;
