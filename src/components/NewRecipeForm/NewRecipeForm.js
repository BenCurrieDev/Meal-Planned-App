import { useState } from 'react';
import * as S from './styles';
import { useDispatch } from 'react-redux';
import { addRecipe } from '../../features/recipes/recipesSlice';

const NewRecipeForm = () => {
  const [title, setTitle] = useState('');
  const [summary, setSummary] = useState('');
  const [instructions, setInstructions] = useState('');
  const [ingredients, setIngredients] = useState({});
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
          <label for="instructions">Instructions: </label>
          <input
            id="instructions"
            value={instructions}
            onChange={(e) => setInstructions(e.currentTarget.value)}
          />
        </li>
        <li>Add more complex state inputs once recipes slice works correctly</li>
        <li>
          <input type="submit" value="Save Recipe"/>
        </li>
      </ul>
      
    </form>
  )


}

export default NewRecipeForm;
