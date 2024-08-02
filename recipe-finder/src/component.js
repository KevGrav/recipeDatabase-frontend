const RecipeComponent = (props) => {
    const [show, setShow] = useState("");
  
    const { label, image, ingredients, url } = props.recipe;
    return (
        
        <div className='RecipeContainer'>
          <div className="DialogTitle">Ingredients</div>
          <div className="DialogContent">
            <div className="RecipeName">{label}</div>
            <div className="table">
              <div className="thead">
                <div className="th">Ingredient</div>
                <div className="th">Weight</div>
              </div>
              <div className="tbody">
                {ingredients.map((ingredient, index) => (
                  <div className="tr" key={index} className="ingredient-list">
                    <div className="td">{ingredient.text}</div>
                    <div className="td">{ingredient.weight}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="DialogActions">
            <div className="SeeNewTab" onClick={() => window.open(url)}>See More</div>
            <div className="SeeMoreText" onClick={() => setShow("")}>Close</div>
          </div>
        </div>
        <div className="CoverImage" src={image} alt={label}></div>
        <div className="RecipeName">{label}</div>
        <div className="IngredientsText" onClick={() => setShow(!show)}>Ingredients</div>
        <div className="SeeMoreText" onClick={() => window.open(url)}>See Complete Recipe</div>
      
    );
  };