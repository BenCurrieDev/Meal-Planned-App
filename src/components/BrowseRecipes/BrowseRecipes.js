import { searchRecipes } from "./spoonCall";
import { useState } from "react";
import { useSelector } from "react-redux";
import { selectQuery, selectCache } from "../../features/apiCalls/cachedSearchSlice";
import BrowseCard from "../BrowseCard/BrowseCard";
import AdditionalSearchParams from "../AdditionalSearchParams/AdditionalSearchParams";



const BrowseRecipes = () => {
    const [query, setQuery] = useState('');
    const [diet, setDiet] = useState([]);
    const [intolerances, setIntolerances] = useState([]);
    const [maxReadyTime, setMaxReadyTime] = useState(0);
    const prevQuery = useSelector(selectQuery);
    const cache = useSelector(selectCache);
    

    const handleChange = ({ target }) => {
      setQuery(target.value);
    }
    
    const handleSearch = () => {
      // ensures same query not passed twice in succession to reduce unnecessary api calls
      console.log('Query: ', query, 'Previous query: ', prevQuery);
      if (query === prevQuery) {
        return;
      }
      searchRecipes(query);
    }


    return (
        <>
          <div>
            <label htmlFor="recipeSearch">Search for new recipes:</label>
            <input type="search" id="recipeSearch" value={query} onChange={handleChange}/>
            <AdditionalSearchParams setDiet={setDiet} setIntolerances={setIntolerances} setMaxReadyTime={setMaxReadyTime} />
            <button onClick={handleSearch}>Search</button>
          </div>
          <div>
            {cache.results.map((obj, index) => <BrowseCard key={index} searchResult={obj} />)}
          </div>
        </>
    )
}

export default BrowseRecipes;