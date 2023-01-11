import RecipeCard from "../RecipeCard/RecipeCard";
import { selectRecipes } from "../../features/recipes/recipesSlice";
import { useSelector } from "react-redux";

const RecipeDisplayArea = (props) => {
  const recipes = useSelector(selectRecipes);
  const recipeIds = Object.keys(recipes);
  let isRecipe = recipeIds.length === 0 ? false : true;
  return (
    <div>
        <ul className="m-4 flex flex-wrap">
            {isRecipe ? recipeIds.map((id) => (
                <RecipeCard key={id} id={id} viewDetails={props.viewDetails}/>
            )) : <h4>No saved recipes</h4>}
        </ul>
    </div>
  )
}

export default RecipeDisplayArea;