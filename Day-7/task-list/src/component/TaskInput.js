import React, {useState} from "react"

import { Task } from '../models/task'

export default function TaskInput(props) {

  const [taskName, setTaskName] = useState('')
  
  function onFormSubmitted(event){
    event.preventDefault()

    const task = new Task(
      taskName,
      false,
      new Date().getTime()
    )

    props.onTaskCreated(task)

    setTaskName('')
  }

  return (
    <div className='mt-4'>
        <form onSubmit={onFormSubmitted}>
        <div className="input-group mb-3">
          <input
            value={taskName}
            onChange={(event) =>  setTaskName(event.target.value) }
            type="text"
            className="form-control"
            placeholder="Enter Task Name" />
          <button
            className="btn btn-outline-secondary"
            type="submit">
            +
          </button>
        </div>
        </form>
    </div>
  );
}