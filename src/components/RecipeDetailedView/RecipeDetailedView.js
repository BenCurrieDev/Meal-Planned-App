import { useSelector } from "react-redux";


const RecipeDetailedView = ({ recipe }) => {
    const { id, title, summary, servings, readyInMinutes, instructions, extendedIngredients } = recipe;
    
    
    return (
     <>
       <h3>{title}</h3>
       <button><h4>Edit</h4></button>
       <button><h4>Delete</h4></button>
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