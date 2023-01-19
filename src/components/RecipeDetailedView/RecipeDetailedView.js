import { useDispatch } from "react-redux";
import { removeRecipe } from "../../features/recipes/recipesSlice";


const RecipeDetailedView = ({ recipe, backToBook, editRecipe }) => {
    const { id, title, servings, readyInMinutes, instructions, extendedIngredients } = recipe;
    const tags = recipe.tags ? recipe.tags : [];
    const dispatch = useDispatch();

    const handleDelete = () => {
        if (window.confirm(`Remove ${title} from your recipe book?`)) {
            dispatch(removeRecipe(id));
            backToBook();
        }
    }

    return (
        <div className="flex flex-col items-center">
            <h3 className="text-gray-900 text-xl font-medium mt-6 mb-2 text-center">{title}</h3>
            <div className="flex items-center content-center">
                <button onClick={editRecipe} className="rounded-2xl bg-gray-700 text-gray-200 py-1 px-4 text-lg font-light"><h4>Edit</h4></button>
                <button onClick={handleDelete} className="rounded-2xl bg-gray-700 text-gray-200 py-1 px-4 ml-2 text-lg font-light"><h4>Delete</h4></button>
            </div>
            <div className="flex text-sm my-2">
                <p>Serves: {servings}</p>
                <p className="ml-4">Prep & cooking time: {readyInMinutes}</p>
            </div>
            <div className="flex flex-wrap w-72 mb-2 justify-center">
                {tags.map((tag, index) => {
                    return (
                        <p key={index} className="bg-gray-400 py-1 px-2 rounded shadow-sm text-xs text-gray-900 mx-1 mb-1">{tag}</p>
                    )
                }
                )}
            </div>
            <h3 className="text-lg">Ingredients:</h3>
            <table>
                <tbody className="text-xs text-gray-600">
                    {extendedIngredients.map(({ name, amount, unit }, index) => {
                        return (
                            <tr key={index}>
                                <td className="text-right px-2">{`${amount} ${unit}`}</td>
                                <td >{name}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
            <h3 className="text-lg mt-4">Instructions:</h3>
            <p className="mx-4 text-sm text-gray-600 text-center mt-2 mb-4">{instructions}</p>
        </div>
        

    )
}

export default RecipeDetailedView;