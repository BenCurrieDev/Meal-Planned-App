import { getRecipeInformation } from "../BrowseRecipes/spoonCall";
import { useSelector } from "react-redux";
import { selectCachedRecipes } from "../../features/apiCalls/cachedSearchSlice";

const BrowseCard = (props) => {
  const { id, title, image } = props.searchResult;
  const recipeCache = useSelector(selectCachedRecipes);

  const handleClick = async () => {
    // check if info in cache, if not, make api call and cache
     if (!Object.keys(recipeCache).includes(id.toString())) {
       const apiResult = await getRecipeInformation(id);
       if (!apiResult) {
        console.log('Error during api call, aborting handleClick');
       }
     } 
    // pass info to new view component and switch view
   
    props.browseDetails(id);

  }
     
  return (
    <button onClick={handleClick}>
        <h4>{title}</h4>
        <img src={image} alt={title}  />
    </button>
  )
}

export default BrowseCard;