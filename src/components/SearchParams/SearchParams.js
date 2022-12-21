import { useState } from "react";


const searchParams = {
    diet: ['vegan', 'vegetarian', 'gluten free'],
    intolerances: ['dairy', 'peanut', 'soy', 'gluten', 'egg', 'seafood', 'sulfite', 'sesame', 'tree nut', 'grain', 'shellfish', 'wheat'],
    times: [5, 10, 15, 20, 30, 45, 60, 120]
  }

const SearchParams = ({ query, setQuery, diet, setDiet, intolerances, setIntolerances, maxReadyTime, setMaxReadyTime }) => {
    const [showOther, setShowOther] = useState(false);

    const handleChange = ({ target }) => {
       setQuery(target.value);
       console.log(query);
    }
    
   
    return (
       <form>
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
          <input type="checkbox" id="vegetarian"/>
          <label htmlFor="vegetarian">vegetarian</label>
          <input type="checkbox" id="vegan"/>
          <label htmlFor="vegan">vegan</label>
          <input type="checkbox" id="glutenFree"/>
          <label htmlFor="glutenFree">gluten free</label>
          <input type="checkbox" id="other"/>
          <label htmlFor="other">show intolerances</label>
          {!showOther && 
              <fieldset>
                <legend>Intolerances</legend>
                {searchParams.intolerances.map((intolerance, index) => {
                  return (
                    <div key={index}>
                      <input type="checkbox" id={intolerance}/>
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