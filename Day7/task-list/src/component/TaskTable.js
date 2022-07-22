import React from 'react'

export default function TaskTable(props) {

  function toggleTaskComplete(task){
    task.complete = !task.complete
    props.onTaskUpdated(task)
      }

    function onTaskRemove(task){
      props.onTaskRemove(task)
    }

  return (
    <div className='mt-3'>

      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Complete</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {
            props.tasks.map((task) =>
            <tr key={task.id}>
              <td>{task.name}</td>
              <td>
                {
                  task.complete ? 
                  <i className="bi bi-circle-fill green"></i>
                  :
                  <i className="bi bi-circle"></i>
                }
              </td>
              <td>
                <button onClick={(event) => toggleTaskComplete(task)} className='btn btn-primary btn-sm'>
                  {
                    task.complete ?
                    <i class="bi bi-toggle2-off"></i>
                    :
                    <i class="bi bi-toggle2-on"></i>
                  }                  </button>
                <button 
                onClick={(event) => onTaskRemove(task)} className='btn btn-primary btn-sm ms-2'>
                  <i className="bi bi-trash"></i>
                  </button>
              </td>
            </tr>)
          }
        </tbody>
      </table>

    </div>
  );
  }