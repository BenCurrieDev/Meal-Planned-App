import { selectRecipes } from "../../features/recipes/recipesSlice";
import { useSelector } from "react-redux";

const RecipeCard = ( props ) => {
  const recipes = useSelector(selectRecipes);
  const recipe = recipes[props.id];
  const isTime = recipe.readyInMinutes ? true : false;
  return (
    <li className="w-full">
        <button onClick={() => props.viewDetails(recipe)} className="rounded-md bg-gray-100 mb-2 w-full shadow-sm">
          <h4 className="text-gray-800 text-lg font-medium py-2 text-left px-2 w-full">{recipe.title}</h4>
        </button>
    </li>
  )
}

export default RecipeCard;