import { selectRecipes } from "../../features/recipes/recipesSlice";
import { useSelector } from "react-redux";

const RecipeCard = ( props ) => {
  const recipes = useSelector(selectRecipes);
  const recipe = recipes[props.id];
  const isTime = recipe.readyInMinutes ? true : false;
  return (
    <li>
        <button onClick={() => props.viewDetails(recipe)}>
          <h4>{recipe.title}</h4>
          <p>{isTime ? `Ready in ${recipe.readyInMinutes} minutes` : 'No prep & cooking time available'}</p>
        </button>
    </li>
  )
}

export default RecipeCard;