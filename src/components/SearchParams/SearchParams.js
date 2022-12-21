import { searchRecipes } from "../BrowseRecipes/spoonCall";


const searchParams = {
    diet: ['vegan', 'vegetarian', 'gluten free'],
    intolerances: ['dairy', 'peanut', 'soy', 'gluten', 'egg', 'seafood', 'sulfite', 'sesame', 'tree nut', 'grain', 'shellfish', 'wheat'],
    times: [5, 10, 15, 20, 30, 45, 60, 120]
  }

const SearchParams = ({showOther, setShowOther, query, setQuery, diet, setDiet, intolerances, setIntolerances, maxReadyTime, setMaxReadyTime, disableSearch, setDisableSearch }) => {

    const handleSearch = (e) => {
      e.preventDefault();
      // prevents multiple searches until a search parameter is changed
      if (disableSearch) return;
      setDisableSearch(true);
      const paramObj = {
        query: query,
        diet: diet,
        intolerances: intolerances,
        maxReadyTime: maxReadyTime
      }
      console.log(paramObj);
      //searchRecipes(paramObj);
    }

    const handleChange = ({ target }) => {
       setDisableSearch(false);
       setQuery(target.value);
       console.log(query);
    }

    const handleIntoleranceCheck = ({ target }) => {
       setDisableSearch(false);
       target.checked ? 
         setIntolerances(prev => [...prev, target.value])
         :
         setIntolerances(() => intolerances.filter(intol => target.value !== intol));
    }

    const handleShowCheck = ({ target }) => {
      setDisableSearch(false);
      setShowOther(target.checked);
    }

    const handleDietCheck = ({ target }) => {
      setDisableSearch(false);
       target.checked ? 
         setDiet(prev => [...prev, target.value])
         :
         setDiet(() => diet.filter(d => target.value !== d));
    }
    
   
    return (
       <form onSubmit={handleSearch}>
        <label htmlFor="recipeSearch">Search for new recipes:</label>
        <input type="search" id="recipeSearch" value={query} onChange={handleChange}/>
        <label htmlFor="time">Max Time:</label>
        <select id="time">
            <option value="">None</option>
            {searchParams.times.map((time, index) => <option key={index} value={time}>{time}</option>)}
        </select>
        <button>Search</button>
        
        <fieldset>
          <legend>Dietary Requirements</legend>
          <input type="checkbox" id="vegetarian" value="vegetarian" onChange={handleDietCheck}/>
          <label htmlFor="vegetarian">vegetarian</label>
          <input type="checkbox" id="vegan" value="vegan" onChange={handleDietCheck}/>
          <label htmlFor="vegan">vegan</label>
          <input type="checkbox" id="glutenfree" value="gluten free" onChange={handleDietCheck}/>
          <label htmlFor="glutenFree">gluten free</label>
          <input type="checkbox" id="other" onChange={handleShowCheck}/>
          <label htmlFor="other">other</label>
          {showOther && 
              <fieldset>
                <legend>Intolerances / Allergies</legend>
                {searchParams.intolerances.map((intolerance, index) => {
                  return (
                    <div key={index}>
                      <input type="checkbox" id={index} value={intolerance} onChange={handleIntoleranceCheck}/>
                      <label htmlFor={intolerance}>{intolerance}</label>
                    </div>
                  )
                })}
              </fieldset> 
            }
          
        </fieldset>

       </form>
   )
}

export default SearchParams;