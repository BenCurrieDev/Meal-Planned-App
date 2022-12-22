import { getRecipeInformation } from "../BrowseRecipes/spoonCall";
import { useSelector } from "react-redux";
import { selectCachedRecipes } from "../../features/apiCalls/cachedSearchSlice";

const BrowseCard = (props) => {
  const { id, title, image } = props.searchResult;
  const recipeCache = useSelector(selectCachedRecipes);

  const handleClick = async () => {
    // check if info in cache, if not, make api call and cache
    console.log('Checking cache for info');
     if (!Object.keys(recipeCache).includes(id.toString())) {
       console.log('Info not found, making api call...');
       const apiResult = await getRecipeInformation(id);
       console.log('does this call before - Info in cache')
       if (!apiResult) {
        console.log('Error during api call, aborting handleClick');
       }
     } 
    console.log('Info in cache');
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