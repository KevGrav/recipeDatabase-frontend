import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './RecipeList.css'
//import RecipeComponent from './RecipeComponent'

useEffect(() =>{
  async function getRecipes(){
    try {
      const foundRecipes = await axios.get(`http://localhost:3000/api/recipes/get-recipes/`, {searchString: searchQuery})
      setRecipeList(foundRecipes.data.hits)
    }catch (error){
      console.log(error)
    }
  }
  getRecipes()
},[])



function RecipeList() {
  const [recipeList, setRecipeList] = useState([])
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
               
            {/* <ul>
          {
            recipeList.map(recipe =>{
              return(
                <li onClick = {()=>handleTodoDone(setRecipeList.id)} style={{textDecoration: todo.done ? "line-through" : "none"}} key={todo.id}>
                  {todo.todo}
                </li>
              )
            })
          }
        </ul>    */}
          
        </div>
    </div>
  )
}

export default RecipeList