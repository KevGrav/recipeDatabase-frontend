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
  const [searchQuery, setSearchQuery] = useState("")



  return (
    <div>
        <div className='form-div'>
          <form>
            <input 
              type='text'
              name='searchQuery'
              placeholder='Search Recipe'
              onChange={e => setSearchQuery(e.target.value)}
              value={searchQuery}/>
            <button type='submit'>Submit</button>
          </form>
          <button
              type='submit'
              className='favoriteRecipes'
              onClick={e => getFavorites}
              >Show Favorites
          </button>
          <button
              type='submit'
              className='showPantry'
              onClick={e => getAllPantryItems}
              >Show Pantry
          </button> 
        </div>

        <div className='recipeList-div'>
          
            {/* {recipeList?.length ? (
              recipeList.map((recipe, index) =>(  
                <RecipeComponent key={index} recipe={recipe.recipe} />
              ))
              ) : (
              <img className='Placeholder' src="/recipe-finder/food.svg" alt="food pic"/>
            )} */}
                {/* return(
              <li key={recipe.id}>
              {recipe.name}234
              </li>
                )
              } )
            } */}

          
        </div>
    </div>
  )
}

export default RecipeList