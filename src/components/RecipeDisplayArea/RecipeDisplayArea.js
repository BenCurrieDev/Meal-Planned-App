import RecipeCard from "../RecipeCard/RecipeCard";
import { selectRecipes } from "../../features/recipes/recipesSlice";
import { useSelector } from "react-redux";

const RecipeDisplayArea = () => {
  const recipes = useSelector(selectRecipes);
  const recipeIds = Object.keys(recipes);
  let isRecipe = recipeIds.length === 0 ? false : true;
  return (
    <div>
        <h3>Saved Recipes</h3>
        <ul>
            {isRecipe ? recipeIds.map((id) => (
                <RecipeCard key={id} id={id}  />
            )) : <h4>You do not have any saved recipes yet</h4>}
        </ul>
    </div>
  )
}

export default RecipeDisplayArea;