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
        <div className="flex flex-col items-center">
            <div className="flex items-center content-center">
                <h3 className="text-gray-900 text-xl font-medium my-6 text-center">{title}</h3>
                <button onClick={handleSave} className="rounded-2xl bg-gray-700 text-gray-200 py-1 px-4 ml-4 text-lg font-light">Save Recipe</button>
            </div>
            
            <img src={image} alt={title} width="240" className="rounded-xl"/>
            <div className="flex text-sm my-2">
                <p>Serves: {servings}</p>
                <p className="ml-4">Prep & cooking time: {readyInMinutes}</p>
            </div>
            <h4 className="text-lg">Ingredients</h4>
            <table>
                <tbody className="text-xs text-gray-600">
                    {ingredients.map(({ name, amount, unit }, index) => {
                        return (
                            <tr key={index}>
                                <td className="text-right px-2">{`${amount} ${unit}`}</td>
                                <td >{name}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
            <h4 className="text-lg mt-2">Instructions</h4>
            <p className="mx-4 text-sm text-gray-600 text-center mt-2 mb-4">{simpleInstuctions}</p>
        </div>
    )
}

export default BrowseDetails;