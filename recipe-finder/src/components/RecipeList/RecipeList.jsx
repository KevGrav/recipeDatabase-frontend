import React, { useState } from 'react'
import './RecipeList.css'





function RecipeList() {
  const [recipeList, setRecipeList] = useState([
      {
        image: "img src='redCabbage.svg'",
        title: "Red Cabbage",
        Ingredients: "Ingredients",
        SeeCompleteRecipe: "See Complete Recipe"
      }


  ])

  const [recipeInput, setRecipeInput] = useState("")
  return (
    <div>
      <ul>
      {
        recipeList.map(recipe =>{  //I don't have a list, I need to fill the recipe containers
          return(
            <li key={recipe.id}>
            {recipe.name}234
            </li>
          )
        } )
      }

      </ul>
    </div>
  )
}

export default RecipeList