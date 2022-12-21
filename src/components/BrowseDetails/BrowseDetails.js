
import { useSelector } from "react-redux";
import { selectCachedRecipes } from "../../features/apiCalls/cachedSearchSlice";

const BrowseDetails =  ({ activeId }) => {

    const cachedRecipes = useSelector(selectCachedRecipes);
    console.log('Logging cache: ', cachedRecipes)
    const details = cachedRecipes[activeId];
    console.log(details)
    const { extendedIngredients, image, analyzedInstructions, readyInMinutes, servings, sourceName, sourceUrl, summary, title } = details;
    return (
        <>
        <h3>{title}</h3>
        <img src={image} alt={title} width="300"/>
        <p>Serves: {servings}</p><p>Prep & cooking time: {readyInMinutes}</p>
        <h4>Instructions</h4>
        {analyzedInstructions[0]['steps'].map(obj => <p>{`${obj.number}. ${obj.step}`}</p>)}
        <h4>Ingredients</h4>
        {console.log(extendedIngredients)}
        <table>
        {extendedIngredients.map(({ name, amount, measures }) => {
            return (
                <tr>
                    <td>{name.toLowerCase()}</td>
                    <td>{amount.toString().length > 3 ? parseFloat(amount.toPrecision(3)) : amount}</td>
                    <td>{measures.metric.unitShort.toLowerCase()}</td>
                </tr>
            )
        })}
       </table>
        </>
    )
}

export default BrowseDetails;