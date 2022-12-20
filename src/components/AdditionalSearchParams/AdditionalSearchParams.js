const searchParams = {
    diet: ['vegan', 'vegetarian', 'gluten free'],
    intolerances: ['dairy', 'peanut', 'soy', 'gluten', 'egg', 'seafood', 'sulfite', 'sesame', 'tree nut', 'grain', 'shellfish', 'wheat'],
    times: [5, 10, 15, 20, 30, 45, 60, 120]
  }

const AdditionalSearchParams = ({ setDiet, setIntolerances, setMaxReadyTime }) => {
   
    
   
    return (
       <div>
        <label htmlFor="diet">Diet:</label>
        <select id="diet" multiple>
          <option value="">Any</option>
          {searchParams.diet.map((diet, index) => <option key={index} value={diet}>{diet}</option>)}
        </select>
        <label htmlFor="intolerances">Intolerances:</label>
        <select id="intolerances" multiple>
          <option value="">None</option>
          {searchParams.intolerances.map((intolerance, index) => <option key={index} value={intolerance}>{intolerance}</option>)}
        </select>
        <label htmlFor="time">Max Time:</label>
        <select id="time">
            <option value="">None</option>
            {searchParams.times.map((time, index) => <option key={index} value={time}>{time}</option>)}
        </select>
          

       </div>
   )
}

export default AdditionalSearchParams;