import { useSelector, useDispatch } from "react-redux";
import { selectCachedRecipes } from "../../features/apiCalls/cachedSearchSlice";
import { addRecipe } from "../../features/recipes/recipesSlice";

const BrowseDetails = ({ browseId, viewDetails }) => {
    const recipeInfo = useSelector(selectCachedRecipes);
    const dispatch = useDispatch();
    const details = recipeInfo[browseId];
    const { extendedIngredients, image, analyzedInstructions, readyInMinutes, servings, title } = details;
    const simpleInstuctions = analyzedInstructions[0]['steps'].map(obj => obj.step).join(' ');

    const ingredients = extendedIngredients.map(({ name, amount, measures, id }) => {
       return {
        id: id,
        name: name.toLowerCase(),
        amount: amount.toString().length > 3 ? parseFloat(amount.toPrecision(3)) : amount,
        unit: measures.metric.unitShort.toLowerCase()
       }
    })

    const handleSave = () => {
        const recipeObj = {
            id: browseId,
            title: title,
            servings: servings,
            readyInMinutes: readyInMinutes,
            instructions: simpleInstuctions,
            extendedIngredients: ingredients
        }

        dispatch(addRecipe(recipeObj));
        viewDetails(recipeObj);
    }

    return (
        <>
            <h3>{title}</h3>
            <button onClick={handleSave}><h4>Save Recipe</h4></button>
            <img src={image} alt={title} width="300" />
            <p>Serves: {servings}</p><p>Prep & cooking time: {readyInMinutes}</p>
            <h4>Ingredients</h4>
            <table>
                <tbody>
                    {ingredients.map(({ name, amount, unit }, index) => {
                        return (
                            <tr key={index}>
                                <td>{name}</td>
                                <td>{amount}</td>
                                <td>{unit}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
            <h4>Instructions</h4>
            <p>{simpleInstuctions}</p>
        </>
    )
}

export default BrowseDetails;