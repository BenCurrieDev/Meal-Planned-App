import { useState } from 'react';
import * as S from './styles';
import { useDispatch } from 'react-redux';
import {v4 as uuidv4} from 'uuid';
import { addRecipe } from '../../features/recipes/recipesSlice';
import IngredientOptions from './IngredientOptions';
import ingredientsToIds from '../../data/ingredientsData';
import UnitOptions from './UnitOptions';
import finalPropsSelectorFactory from 'react-redux/es/connect/selectorFactory';


const NewRecipeForm = (props) => {
  const [title, setTitle] = useState('');
  const [summary, setSummary] = useState('');
  const [servings, setServings] = useState(0);
  const [readyInMinutes, setReadyInMinutes] = useState(0);
  const [instructions, setInstructions] = useState('');
  const [ingredientsList, setIngredientsList] = useState({})
  const [amountsList, setAmountsList] = useState({})
  const [unitsList, setUnitsList] = useState({})
  const [ingredientNum, setIngredientNum] = useState([]);
  const dispatch = useDispatch();
  

  // CAN USEFFECT IMPROVE THE PERFORMANCE BY REMOVING CONSTANT CONDITIONALS IN RENDER METHOD?



  const handleSubmit = (e) => {
    e.preventDefault();
    // checks if title given
    if (!title) {
      alert('\nFORM SUBMITTED (ERROR: no title):\n\nPlease include a title for your recipe');
      return;
    }
    // checks if ingredients all have 3 inputs
    let testSuccess = true;
    
    ingredientNum.forEach((id) => {
      if (!ingredientsList[id] || !amountsList[id] || !unitsList[id]) {
        alert('\nFORM SUBMITTED (ERROR: incorrect ingredients format):\n\nPlease ensure that each ingredient has an ingredient type, amount and measurement.\n\nIf an ingredient is not required, please remove the ingredient row and resubmit.');
        testSuccess = false;
      }
    })
    if (!testSuccess) return;
    // checks if data for meal planner was submitted
    if (!servings || !readyInMinutes || !ingredientNum[0]) {
      alert('\nFORM SUBMITTED (USER NOTICE):\n\nNot all features can be used with recipes that do not include the following:\n\nPortions, prep & cooking time and ingredients');
    }
    
    // create id
    let newId = uuidv4();

    // create new recipe object
    let newRecipe = {
      id: newId,
      title: title,
      summary: summary,
      servings: servings,
      readyInMinutes: readyInMinutes,
      instructions: instructions,
      extendedIngredients: ingredientNum.map(num => {
        const name = ingredientsList[num].toLowerCase();
        const ingredientId = ingredientsToIds[name];
        if (!ingredientId) {alert('\nFORM SUBMITTED (USER NOTICE):\n\nOne or more ingredients are not on our ingredients list.\n\nIf this is unexpected, please edit the recipe so that all ingredients appear on the list (ensure correct spelling).\n\nSome Mealsy features are only available for recipes that use listed ingredients.')}
        return {
          id: ingredientId,
          name: name,
          amount: amountsList[num],
          unit: unitsList[num]
        }
      })
    }
    // add a new recipe to store
    dispatch(addRecipe(newRecipe));
    

    // reset new recipe state
    setTitle('');
    setSummary('');
    setServings(0);
    setReadyInMinutes(0);
    setInstructions('');
    setIngredientNum([]);
    setIngredientsList({});
    setAmountsList({});
    setUnitsList({});
    
    // send back to recipes view
    props.backToBook();
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
          <label htmlFor="title">Title: </label>
          <input
            id="title"
            value={title}
            onChange={(e) => setTitle(e.currentTarget.value)}
            autoFocus
          />
        </li>
        <li>
          <label htmlFor="summary">Summary: </label>
          <input
            id="summary"
            value={summary}
            onChange={(e) => setSummary(e.currentTarget.value)}
          />
        </li>
        <li>
          <label htmlFor="portions">Portions: </label>
          <input
            type="number"
            id="portions"
            value={servings}
            onChange={(e) => setServings(e.currentTarget.value)}
          />
        </li>
        <li>
          <label htmlFor="prep">Prep & cooking time: </label>
          <input
            type="number"
            id="prep"
            value={readyInMinutes}
            onChange={(e) => setReadyInMinutes(e.currentTarget.value)}
          />
        </li>
        <li>
          <label htmlFor="instructions">Instructions: </label>
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
          
          <label htmlFor="addRecipe">Add Ingredient: </label>
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
