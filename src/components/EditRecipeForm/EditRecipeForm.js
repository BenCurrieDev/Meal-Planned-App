
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addRecipe } from '../../features/recipes/recipesSlice';
import IngredientOptions from '../NewRecipeForm/IngredientOptions';
import ingredientsToIds from '../../data/ingredientsData';
import UnitOptions from '../NewRecipeForm/UnitOptions';
import { useSelector } from 'react-redux';
import { selectAllIngredients } from '../../data/IngredientsSlice';
import TagsInput from '../TagsInput/TagsInput';

const EditRecipeForm = ({ recipe, viewDetails }) => {
  const ingredientOptions = useSelector(selectAllIngredients);
  const ingredientOptionsList = Object.keys(ingredientOptions);
  let startingIngredients = recipe.extendedIngredients;
  let recipeId = recipe.id;
  let ingredientNumStart = [];
  let ingredientsListStart = {};
  let amountsListStart = {};
  let unitsListStart = {};
  startingIngredients.forEach((ingredient, index) => {
    ingredientNumStart.push(index+1);
    ingredientsListStart[index+1] = ingredient.name;
    amountsListStart[index+1] = ingredient.amount;
    unitsListStart[index+1] = ingredient.unit;
  })


  const [title, setTitle] = useState(recipe.title);
  const [servings, setServings] = useState(recipe.servings);
  const [readyInMinutes, setReadyInMinutes] = useState(recipe.readyInMinutes);
  const [instructions, setInstructions] = useState(recipe.instructions);
  const [ingredientsList, setIngredientsList] = useState(ingredientsListStart)
  const [amountsList, setAmountsList] = useState(amountsListStart)
  const [unitsList, setUnitsList] = useState(unitsListStart)
  const [ingredientNum, setIngredientNum] = useState(ingredientNumStart);
  const [tags, setTags] = useState(recipe.tags ? recipe.tags : []);
  const [tagsInput, setTagsInput] = useState('');
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
      if (!ingredientsList[id] || !amountsList[id] ) {
        alert('\nFORM SUBMITTED (ERROR: incorrect ingredients format):\n\nPlease ensure that each ingredient has an ingredient type, amount and measurement.\n\nIf an ingredient is not required, please remove the ingredient row and resubmit.');
        testSuccess = false;
      }
    })
    if (!testSuccess) return;
    // checks if data for meal planner was submitted
    if (!servings || !readyInMinutes || !ingredientNum[0]) {
      alert('\nFORM SUBMITTED (USER NOTICE):\n\nNot all features can be used with recipes that do not include the following:\n\nPortions, prep & cooking time and ingredients');
    }

    // create new recipe object
    let newRecipe = {
      id: recipeId,                // CHANGE TO REAL ID
      title: title,
      servings: servings,
      readyInMinutes: readyInMinutes,
      tags: tags,
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

    // send back to recipes view
    viewDetails(newRecipe);       // CHANGE TO TAKE US BACK TO THE DETAILED VIEW OF THIS RECIPE
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
      <h2 className="text-gray-900 text-xl font-medium py-2 text-center">{title ? title : 'New Recipe'}</h2>
      <ul className='mx-10'>
        <li>
          <label htmlFor="title" className='block text-sm '>Title </label>
          <input
            className='mb-2 shadow-sm px-2 py-1 w-64 text-gray-600'
            id="title"
            value={title}
            onChange={(e) => setTitle(e.currentTarget.value)}
            autoFocus
          />
        </li>
        <ul className='flex'>
          <li>
            <label htmlFor="portions" className='block text-sm'>Servings</label>
            <input
              className='mb-2 shadow-sm w-6 text-center text-gray-600'
              type="number"
              id="portions"
              value={servings}
              onChange={(e) => setServings(e.currentTarget.value)}
            />
          </li>
          <li className='ml-12'>
            <label htmlFor="prep" className='block text-sm'>Minutes</label>
            <input
              className='mb-2 shadow-sm px-2 w-10 text-right text-gray-600'
              type="number"
              id="prep"
              value={readyInMinutes}
              onChange={(e) => setReadyInMinutes(e.currentTarget.value)}
            />
          </li>
        </ul>
        <TagsInput setTags={setTags} setTagsInput={setTagsInput} tagsInput={tagsInput} tags={tags} />
        <li>
          <label htmlFor="instructions" className='block text-sm'>Instructions </label>
          <textarea
            className='mb-2 shadow-sm px-2 w-64 text-gray-600 text-sm h-36'
            id="instructions"
            value={instructions}
            onChange={(e) => setInstructions(e.currentTarget.value)}
          />
        </li>

        <li>
          {ingredientNum.map((index) => {
            let last = index === ingredientNum.at(-1);
            return (
              <div key={index} className="flex mb-2">
                <div>
                  <input
                    className="w-36 mr-4 text-gray-600 px-2 shadow-sm" 
                    list="ingredientOptions" 
                    id={`ingredient${index}`} 
                    value={ingredientsList[index]} 
                    onChange={(e) => handleIngredientChange(e, index)}
                  />
                  {last && <label htmlFor={`ingredient${index}`} className='block text-xs'>Ingredient</label>}
                </div>
                <div>
                  <input 
                    className='mr-2 w-10 px-2 text-right text-gray-600 shadow-sm'
                    id={`amount${index}`} 
                    value={amountsList[index]} 
                    onChange={(e) => handleAmountChange(e, index)}
                  />
                </div>
                <div>
                  <input 
                    className='w-14 px-2 text-gray-600 shadow-sm'
                    list="unitOptions" 
                    id={`unit${index}`}  
                    value={unitsList[index]} 
                    onChange={(e) => handleUnitChange(e, index)}
                  />
                  {last && <label htmlFor={`unit${index}`} className='block text-xs'>Measure</label>}
                </div>
                <button className='ml-2 bg-gray-700 shadow-sm px-1 rounded text-white text-xl font-extrabold h-6 flex' type="button" onClick={() => removeIngredient(index)}>
                  <span class="material-symbols-outlined">
                    delete
                  </span>
                </button>
              </div>  
            )
          })}
          <IngredientOptions ingredients={ingredientOptionsList} />
          <UnitOptions />
          
        </li>
        <li className='flex justify-center'>
          <button type="button" id="addIngredient" className="rounded-2xl bg-gray-700 text-gray-200 py-1 px-4 mx-auto text-lg font-light mt-8 mb-2" onClick={addIngredient}>Add Ingredient</button>
          <input type="submit" value="Save Recipe" className="rounded-2xl bg-gray-700 text-gray-200 py-1 px-4 mx-auto text-lg font-light mt-8 mb-2"/>
        </li>
        
      </ul>
      
    </form>
  )


}

export default EditRecipeForm;
