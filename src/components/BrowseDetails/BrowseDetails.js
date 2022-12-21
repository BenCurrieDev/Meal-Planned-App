import { useSelector } from "react-redux";
import { selectCachedRecipes } from "../../features/apiCalls/cachedSearchSlice";

const BrowseDetails =  ({ activeId }) => {

    const cachedRecipes = useSelector(selectCachedRecipes);
    console.log('Logging cache: ', cachedRecipes)
    const details = cachedRecipes[activeId];
    console.log(details)
    const { extendedIngredients, image, instructions, readyInMinutes, servings, sourceName, sourceUrl, summary, title } = details;
    return (
        <>
        <h3>{title}</h3>
        <img src={image} alt={title} width="300"/>
        <h4>{summary}</h4>
        
        </>
    )
}

export default BrowseDetails;