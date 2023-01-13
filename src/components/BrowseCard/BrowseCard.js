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
    <button onClick={handleClick} className="my-2 shadow bg-white rounded-lg flex flex-col items-center justify-center justify-items-center">
        <h4 className="text-gray-500 text-lg self-start ml-4 mt-1">{title}</h4>
        <img src={image} alt={title}  className="h-24 mb-2 mt-1 self-center rounded"/>
    </button>
  )
}

export default BrowseCard;