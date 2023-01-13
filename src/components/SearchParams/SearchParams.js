import { searchRecipes } from "../BrowseRecipes/spoonCall";


const searchParams = {
    diet: ['vegan', 'vegetarian', 'gluten free'],
    intolerances: ['dairy', 'peanut', 'soy', 'gluten', 'egg', 'seafood', 'sulfite', 'sesame', 'tree nut', 'grain', 'shellfish', 'wheat'],
    times: [5, 10, 15, 20, 30, 45, 60, 120]
  }

const SearchParams = ({showOther, setShowOther, query, setQuery, diet, setDiet, intolerances, setIntolerances, maxReadyTime, setMaxReadyTime, disableSearch, setDisableSearch }) => {

    const handleSearch = (e) => {
      e.preventDefault();
      // prevents multiple searches until a search parameter is changed or blank searches
      if (disableSearch || !query) return;
      
      setDisableSearch(true);
      const paramObj = {
        query: query,
        diet: diet,
        intolerances: intolerances,
        maxReadyTime: maxReadyTime
      }
      searchRecipes(paramObj);

    }

    const handleChange = ({ target }) => {
       setDisableSearch(false);
       setQuery(target.value);
    }

    const handleIntoleranceCheck = ({ target }) => {
       setDisableSearch(false);
       target.checked ? 
         setIntolerances(prev => [...prev, target.value])
         :
         setIntolerances(() => intolerances.filter(intol => target.value !== intol));
    }

    const handleShowCheck = ({ target }) => {
      setShowOther(target.checked);
    }

    const handleDietCheck = ({ target }) => {
      setDisableSearch(false);
       target.checked ? 
         setDiet(prev => [...prev, target.value])
         :
         setDiet(() => diet.filter(d => target.value !== d));
    }

    const handleTimeChange = ({target}) => {
      setDisableSearch(false);
      setMaxReadyTime(target.value);
    }
    
   
    return (
       <form onSubmit={handleSearch} className="flex flex-wrap content-center items-center flex-col">
        <h2 className="text-gray-900 text-xl font-medium py-2 text-center">Find New Recipes</h2>
        <input type="search" id="recipeSearch" value={query} onChange={handleChange} className='mb-2 shadow-sm px-2 py-1 w-64 text-gray-600'/>
        <div>
          <select id="time" onChange={handleTimeChange} value={maxReadyTime} className='mr-2 mb-2 shadow-sm pr-2 w-14 text-right text-gray-600'>
              <option value="">-</option>
              {searchParams.times.map((time, index) => <option key={index} value={time}>{time}</option>)}
          </select>
          <label htmlFor="time" className="text-xs mr-6">
            <span class="material-symbols-outlined text-lg">
              timer
            </span>
            max
          </label>
          <button className="bg-gray-700 rounded shadow-sm">
            <span class="material-symbols-outlined text-lg px-2 text-white">
              search
            </span>
          </button>
        </div>
        
        
        <fieldset className="border shadow-sm border-gray-700 flex flex-col items-center text-xs ">
          <legend className="text-center px-2 text-sm">Dietary Requirements</legend>
          <div className="flex items-center content-center mb-2">
            <input className="ml-2" type="checkbox" id="vegetarian" value="vegetarian" onChange={handleDietCheck} checked={diet.includes('vegetarian')}/>
            <label className="ml-1" htmlFor="vegetarian">vegetarian</label>
            <input className="ml-4" type="checkbox" id="vegan" value="vegan" onChange={handleDietCheck} checked={diet.includes('vegan')}/>
            <label className="ml-1" htmlFor="vegan">vegan</label>
            <input className="ml-4" type="checkbox" id="glutenfree" value="gluten free" onChange={handleDietCheck} checked={diet.includes('gluten free')}/>
            <label className="ml-1 mr-2" htmlFor="glutenFree">gluten free</label>
          </div>
          <div className="mb-1">
            <input type="checkbox" id="other" onChange={handleShowCheck}/>
            <label className="ml-1" htmlFor="other">more options</label>
          </div>
          {showOther && 
              <fieldset className="flex flex-wrap max-w-xs">
                {searchParams.intolerances.map((intolerance, index) => {
                  return (
                    <div key={index} className="m-1">
                      <input type="checkbox" id={index} value={intolerance} onChange={handleIntoleranceCheck} checked={intolerances.includes(intolerance)}/>
                      <label htmlFor={intolerance} className="ml-1 mr-2">{intolerance}</label>
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