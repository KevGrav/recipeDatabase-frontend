import './App.css'
import React, { useState } from "react"
//import Axios from "axios"
const APP_ID = "a889f78e"
const APP_KEY = "3ffab496cec4b6ed3496b78b560d5950"




function App() {
  const [searchQuery, updateSearchQuery] = useState("");
  const [recipeList, updateRecipeList] = useState([]);
  const [timeoutId, updateTimeoutId] = useState();
  const fetchData = async (searchString) => {
    const foundRecipes = await Axios.get(
      `https://api.edamam.com/search?q=${searchString}&app_id=${APP_ID}&app_key=${APP_KEY}`,
    );
    updateRecipeList(foundRecipes.data.hits);
  };

  const onTextChange = (e) => {
    clearTimeout(timeoutId);
    updateSearchQuery(e.target.value);
    const timeout = setTimeout(() => fetchData(e.target.value), 500);
    updateTimeoutId(timeout);
  };

  return (
    <div className='Container'>
    <div className='Header'>
      <div className='AppName'>
        Recipe Finder
      </div>
      <div className='SearchBox'>
        <div className='SearchInput'>
          <label for="SearchInput">Search Recipe  </label>
            <input type="text" value={searchQuery} onChange={onTextChange}></input>
        </div>
      </div>
      <div className='SB2'>
      <button id="favoriteRecipes">Favorite Recipes</button>
      </div>
      <div className='SB3'>
      <button id="pantryItems">Pantry Items</button>
      </div>
      </div>
      
    <div className= 'RecipeListContainer'>
        <div className='RecipeContainer'>
          <img className='CoverImage' src= "https://edamam-product-images.s3.amazonaws.com/web...f446c624e96cca2301f2142142aab9d4df9b41b9b8cb39656" alt="Shrimp Scampi Pic"/>
          <span className='RecipeName'>Shrimp Scampi</span>
          <span className='IngredientsText'>Ingredients</span>
          <span className='SeeMoreText'>See Complete Recipe</span>
        </div>
    </div>
      
    </div>
    
  )
}

export default App;
