import React, {useState} from "react"

import { Recipes } from '../models/task'

export default function TaskInput(props) {

  const [recipeName, setRecipeName] = useState('')
  
  function onFormSubmitted(event){
    event.preventDefault()

    const recipe = new Recipes(
      recipeName,
      new Date().getTime()
    )

    props.onTaskCreated(recipe)

    setRecipeName('')
  }

  return (
    <div className='mt-4'>
        <form onSubmit={onFormSubmitted}>
        <div className="input-group mb-3">
          <input
            value={recipeName}
            onChange={(event) =>  setRecipeName(event.target.value) }
            type="text"
            className="form-control"
            placeholder="Enter Recipe" />
          <button
            className="btn btn-outline-secondary"
            type="submit">
            +
          </button>
        </div>
        </form>

      {/* <form>
        <div className="input-group mb-3">
          <input
            value={recipeName}
            onChange={(event) =>  setRecipeName(event.target.value) }
            type="text"
            className="form-control"
            placeholder="Enter Recipe Description" />
          <button
            className="btn btn-outline-secondary"
            type="submit">
            +
          </button>
        </div>
        </form> */}


    </div>
  );
}