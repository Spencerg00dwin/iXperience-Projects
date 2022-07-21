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
            <th>Recipe Name</th>
            <th>Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {
            props.recipes.map((recipe) =>
            <tr key={recipe.id}>
              <td>{recipe.recipe}</td>
              <td>
                {
                  recipe.complete ? 
                  <i className="bi bi-circle-fill green"></i>
                  :
                  <i className="bi bi-circle"></i>
                }
              </td>
              <td>
                <button onClick={(event) => toggleTaskComplete(recipe)} className='btn btn-primary btn-sm'>
                  {
                    recipe.complete ?
                    <i className="bi bi-toggle2-off"></i>
                    :
                    <i className="bi bi-toggle2-on"></i>
                  }                  </button>
                <button 
                onClick={(event) => onTaskRemove(recipe)} className='btn btn-primary btn-sm ms-2'>
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