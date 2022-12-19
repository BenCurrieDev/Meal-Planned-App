import { useDispatch } from "react-redux";
import { removeRecipe } from "../../features/recipes/recipesSlice";


const RecipeDetailedView = ({ recipe, backToBook, editRecipe }) => {
    const { id, title, summary, servings, readyInMinutes, instructions, extendedIngredients } = recipe;
    const dispatch = useDispatch();

    const handleDelete = () => {
        if (window.confirm(`Remove ${title} from your recipe book?`)) {
            dispatch(removeRecipe(id));
            backToBook();
        }
    }
    
    return (
     <>
       <h3>{title}</h3>
       <button onClick={editRecipe}><h4>Edit</h4></button>
       <button onClick={handleDelete}><h4>Delete</h4></button>
       <h4>{summary}</h4>
       <p>{`Serves: ${servings}`}</p>
       <p>{`Prep & cooking time: ${readyInMinutes} minutes`}</p>
       <h3>Instructions:</h3>
       <p>{instructions}</p>
       <h3>Ingredients:</h3>
       <table>
        {extendedIngredients.map(({ name, amount, unit }) => {
            return (
                <tr>
                    <td>{name}</td>
                    <td>{amount}</td>
                    <td>{unit}{amount > 1 && 's'}</td>
                </tr>
            )
        })}
       </table>
     </>
      
    )
}

export default RecipeDetailedView;