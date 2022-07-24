import React, {useState, useEffect} from 'react'

import RecipeInput from './RecipeInput'
import RecipeTable from './RecipeTable'

import recipeService from '../../services/recipe.service'

export default function RecipePage() {

useEffect(()=> {
  fetchRecipes()
}, [])

  const [recipes, setRecipes] = useState([])

  async function fetchRecipes(){
    try{
      const recipes = await recipeService.readRecipe()
      setRecipes(recipes)
    } catch(err){
      console.log(err)
    }
  }

  async function onTaskCreated(recipe){
    try{
      recipe = await recipeService.createRecipe(recipe)
      const newRecipes = []
      for (let r of recipes) {newRecipes.push(r)}
      newRecipes.push(recipe)

      setRecipes(newRecipes)
    } catch(err){
      console.log(err)
    }
  }



  async function onRecipeRemove(recipe){
    try{
      await recipeService.deleteRecipe(recipe)

    const filteredRecipes = recipes.filter((r) => {
      return r.id !== recipe.id
    })
    setRecipes(filteredRecipes)
    } catch(err){
      console.log(err)
    }
  }

  return (

    <div className='container mt-4'>
      <div className='card card-body text-center'>

        <h1>Grandma's Recipe Book:</h1>
        <hr></hr>
        <div>Recipes:</div>

      <RecipeInput onTaskCreated={onTaskCreated}></RecipeInput>

      <RecipeTable onRecipeRemove={onRecipeRemove} recipes={recipes}></RecipeTable>

      </div>

    </div>

  )
}

