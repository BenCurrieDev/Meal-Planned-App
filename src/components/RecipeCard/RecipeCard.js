import { selectRecipes } from "../../features/recipes/recipesSlice";
import { useSelector } from "react-redux";

const RecipeCard = ( props ) => {
  const recipes = useSelector(selectRecipes);
  const recipe = recipes[props.id];
  return (
    <li>
        <button>{recipe.title}</button>
        <button>x</button>
    </li>
  )
}

export default RecipeCard;