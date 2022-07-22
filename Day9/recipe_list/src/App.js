import React, {useState} from 'react'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import './App.css'

import TaskInput from './component/TaskInput'
import TaskTable from './component/TaskTable'


export default function App() {

  const [recipes, setRecipes] = useState([])

  function onTaskCreated(recipe){
    const newRecipes = []
    for (let r of recipes) {newRecipes.push(r)}
    newRecipes.push(recipe)
    setRecipes(newRecipes)
  }

  function onTaskUpdated(recipe){
    const updatedRecipes = recipes.map((r)=>{
      if (r.id === recipe.id){
        return recipe
      }
      else{
        return r
      }
    })
    setRecipes(updatedRecipes)
  }

  function onTaskRemove(task){
    const filteredrecipes = recipes.filter((t) => {
      return t.id !== task.id
    })

    setRecipes(filteredrecipes)
  }

  return (
    <body className='bg'>
    <div className='container mt-4 bg'>
      <div className='card card-body text-center bg'>

        <h1>Grandma's Recipe Book:</h1>
        <hr></hr>
        <div>Recipes:</div>

      <TaskInput onTaskCreated={onTaskCreated}></TaskInput>

      <TaskTable onTaskRemove={onTaskRemove} onTaskUpdated={onTaskUpdated} recipes={recipes}></TaskTable>

      </div>

    </div>
    </body>

  )
}

