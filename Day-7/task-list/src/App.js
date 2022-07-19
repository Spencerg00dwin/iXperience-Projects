import React, {useState} from 'react'

import 'bootstrap/dist/css/bootstrap.min.css'

import TaskInput from './component/TaskInput'
import TaskTable from './component/TaskTable'


export default function App() {

  const [tasks, setTasks] = useState([])

  function onTaskCreated(task){
    const newTasks = []
    for (let t of tasks) {newTasks.push(t)}
    newTasks.push(task)
    setTasks(newTasks)
  }

  function onTaskUpdated(task){
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

  function onTaskRemove(task){
    const filteredTasks = tasks.filter((t) => {
      return t.id !== task.id
    })

    setTasks(filteredTasks)
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

