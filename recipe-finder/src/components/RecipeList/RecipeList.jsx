import React, { useState } from 'react'
import './RecipeList.css'





function RecipeList() {
  const [RecipeList, setRecipeList] = useState([
      {
        image: "img src='redCabbage.svg'",
        title: "Red Cabbage",
        Ingredients: "Ingredients",
        SeeCompleteRecipe: "See Complete Recipe"
      }


  ])

  const [RecipeInput, setRecipeInput] = useState("")
  return (
    <div>RecipeList</div>
  )
}

export default RecipeList