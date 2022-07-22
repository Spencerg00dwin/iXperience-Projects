import React, {useState, useEffect} from 'react'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'

import './App.css'

import TaskInput from './component/TaskInput'
import TaskTable from './component/TaskTable'

import taskService from './services/task.service'

export default function App() {

  useEffect(() => {
    fetchTasks()
  }, [])

  const [tasks, setTasks] = useState([])

  async function fetchTasks(){
    try{
    const tasks = await taskService.readTasks()
    setTasks(tasks)

    } catch(err){
      console.log(err)
    }
  }

  async function onTaskCreated(task){
    try{
    task = await taskService.createTask(task)

    const newTasks = []
    for (let t of tasks) {newTasks.push(t)}
    newTasks.push(task)
    setTasks(newTasks)
    }
    catch(err){
      console.log(err)
    }
  }

  async function onTaskUpdated(task){

    try {
      await taskService.updateTask(task)
    
    const updatedTasks = tasks.map((t)=>{
      if (t.id === task.id){
        return task
      }
      else{
        return t
      }
    })
    setTasks(updatedTasks)
  }
  catch(err){
    console.log(err)
  }
}

  async function onTaskRemove(task){
    try {

      await taskService.deleteTask(task)

      const filteredTasks = tasks.filter((t) => {
        return t.id !== task.id
      })
  
      setTasks(filteredTasks)
    } catch(err){
      console.log(err)
    }

  }

  return (
    <div className='container mt-4'>

      <div className='card card-body text-center'>

        <h1>Task List</h1>
        <hr></hr>
        <div>Our Simple Task List</div>

      <TaskInput onTaskCreated={onTaskCreated}></TaskInput>

      <TaskTable onTaskRemove={onTaskRemove} onTaskUpdated={onTaskUpdated} tasks={tasks}></TaskTable>

      </div>

    </div>


  )
}

