import React from 'react'

export default function TaskTable(props) {

    function onRecipeRemove(recipe){
      props.onRecipeRemove(recipe)
    }

  return (
    <div className='mt-3'>

      <table className="table">
        <thead>
          <tr>
            <th>Recipe Name</th>
            <th>Description</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {
            props.recipes.map((recipe) =>
            <tr key={recipe.id}>
              <td>{recipe.recipeName}</td>
              <td>{recipe.description}</td>
              <td>
                <button 
                onClick={(event) => onRecipeRemove(recipe)} className='btn btn-secondary btn-sm ms-2'>
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