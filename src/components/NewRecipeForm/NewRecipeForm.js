import { useState } from 'react';
import * as S from './styles';
import { useDispatch } from 'react-redux';
import { addRecipe } from '../../features/recipes/recipesSlice';
import IngredientOptions from './IngredientOptions';
import UnitOptions from './UnitOptions';


const NewRecipeForm = () => {
  const [title, setTitle] = useState('');
  const [summary, setSummary] = useState('');
  const [servings, setServings] = useState(2);
  const [readyInMinutes, setReadyInMinutes] = useState(30);
  const [instructions, setInstructions] = useState('');
  const [ingredientsList, setIngredientsList] = useState({1: ''})
  const [amountsList, setAmountsList] = useState({1: 0})
  const [unitsList, setUnitsList] = useState({1: ''})
  const [ingredientNum, setIngredientNum] = useState([1]);
  const dispatch = useDispatch();
  

  // CAN USEFFECT IMPROVE THE PERFORMANCE BY REMOVING CONSTANT CONDITIONALS IN RENDER METHOD?



  const handleSubmit = (e) => {
    e.preventDefault();

    // check that all required info is there
    
    // create id
    let newId = Math.floor(Math.random() * 5000); // THIS IS JUST A TEST ID, NEED TO IMPROVE
    // create recipe object
    let newRecipe = {
      id: newId,
      title: title,
      summary: summary,
      instructions: instructions
    }
    // add a new recipe to store
    dispatch(addRecipe(newRecipe));



    setTitle('');
    setSummary('');
    setInstructions('');
  }
  

  // INGREDIENT NUMBER CHANGE HANDLERS

  const addIngredient = () => {
    // next id = 1 if no current ingredients / else = last id + 1
    let next = 1;
    if (ingredientNum.length !== 0) {
      next = ingredientNum.at(-1) + 1;
    }
    
    setIngredientNum((prev) => [...prev, next]);
    setIngredientsList((prev) => {return {...prev, [next]: ''}});
    setAmountsList((prev) => {return {...prev, [next]: 0}});
    setUnitsList((prev) => {return {...prev, [next]: ''}});
  }

  const removeIngredient = (id) => {
    setIngredientNum((prev) => prev.filter((num) => num !== id));
    setIngredientsList((prev) => {
      const { id, ...rest} = prev;
      return rest;
    })
  }
  

  // INGREDIENT CHANGE HANDLERS

  const handleIngredientChange = (e, id) => {
    const newValue = e.currentTarget.value;
    setIngredientsList((prev) => {
      return {
        ...prev,
        [id]: newValue
      }
    })
  }

  const handleAmountChange = (e, id) => {
    const newValue = e.currentTarget.value;
    setAmountsList((prev) => {
      return {
        ...prev,
        [id]: newValue
      }
    })
  }

  const handleUnitChange = (e, id) => {
    const newValue = e.currentTarget.value;
    setUnitsList((prev) => {
      return {
        ...prev,
        [id]: newValue
      }
    })
  }
  


  return (
    <form onSubmit={handleSubmit}>
      <h3>{title ? title : 'New Recipe'}</h3>
      <ul>
        <li>
          <label for="title">Title: </label>
          <input
            id="title"
            value={title}
            onChange={(e) => setTitle(e.currentTarget.value)}
            autoFocus
          />
        </li>
        <li>
          <label for="summary">Summary: </label>
          <input
            id="summary"
            value={summary}
            onChange={(e) => setSummary(e.currentTarget.value)}
          />
        </li>
        <li>
          <label for="portions">Portions: </label>
          <input
            type="number"
            id="portions"
            value={servings}
            onChange={(e) => setServings(e.currentTarget.value)}
          />
        </li>
        <li>
          <label for="prep">Prep & cooking time: </label>
          <input
            type="number"
            id="prep"
            value={readyInMinutes}
            onChange={(e) => setReadyInMinutes(e.currentTarget.value)}
          />
        </li>
        <li>
          <label for="instructions">Instructions: </label>
          <input
            id="instructions"
            value={instructions}
            onChange={(e) => setInstructions(e.currentTarget.value)}
          />
        </li>
        
        <li><h4>Ingredient / amount / measure</h4></li>
        <li>
          {ingredientNum.map((index) => {
            return (
              <div key={index}>
                <input 
                  list="ingredientOptions" 
                  id={`ingredient${index}`} 
                  value={ingredientsList[index]} 
                  onChange={(e) => handleIngredientChange(e, index)}
                />
                <IngredientOptions />
                <input 
                  id={`amount${index}`} 
                  value={amountsList[index]} 
                  onChange={(e) => handleAmountChange(e, index)}
                />
                <input 
                  list="unitOptions" 
                  id={`unit${index}`}  
                  value={unitsList[index]} 
                  onChange={(e) => handleUnitChange(e, index)}
                />
                <UnitOptions />
                <button type="button" onClick={() => removeIngredient(index)}>-</button>
              </div>  
            )
          })}
          
          <label for="addRecipe">Add Ingredient: </label>
          <button type="button" id="addIngredient" onClick={addIngredient}>+</button>
        </li>
        <li>
          <input type="submit" value="Save Recipe"/>
        </li>
        
      </ul>
      
    </form>
  )


}

export default NewRecipeForm;
