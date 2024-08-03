import './App.css'
import React, { useState } from "react"
import axios from "axios"

const RecipeComponent = (props) => {
  const [show, setShow] = useState("");

  const { label, image, ingredients, url } = props.recipe;
  return (
          <div className='RecipeContainer'>
      
          </div>
  );
};


function App() {
  const [searchQuery, updateSearchQuery] = useState("");
  const [recipeList, updateRecipeList] = useState([]);
  
  const fetchRecipes = async () => {
    const foundRecipes = await axios.get(
      `localhost:3000/api/recipes/get-recipes/`, {searchString: searchQuery})
      updateRecipeList(foundRecipes.data.hits);
  }

  function newSearchQuery, setState] = useState(searchQuery)
  
  

  return (
    <div className='Container'>
    <div className='Header'>
      <div className='AppName'>
        Recipe Finder
      </div>
      <div className='SearchBox'>
        <div className='SearchInput'>
          <label for="SearchInput">Search Recipe  </label>
            <input type="text" value={searchQuery}></input>
            <button className='newSearchQuery' onClick={newSearchQuery}>find</button>
        </div>
      </div>
      <div className='SB2'>
      <button id="favoriteRecipes">Favorite Recipes</button>
      </div>
      <div className='SB3'>
      <button id="pantryItems">Pantry Items</button>
      </div>
    </div>
    <div className='RecipeListContainer'>
        {recipeList?.length ? (
          recipeList.map((recipe, index) => (
            <RecipeComponent key={index} recipe={recipe.recipe} />
          ))
        ) : (
          <img className='Placeholder' src="/react-recipe-finder/hamburger.svg" alt="hamburger pic"/>
        )}
      </div>
  </div>
    
  )
}

export default App;
