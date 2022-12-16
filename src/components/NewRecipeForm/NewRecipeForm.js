import { useState } from 'react';
import * as S from './styles';

const NewRecipeForm = () => {
  const [title, setTitle] = useState('');
  const [summary, setSummary] = useState('');
  const [instructions, setInstructions] = useState('');
  const [ingredients, setIngredients] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    // check that all required info is there

    // add a new recipe to store

    setTitle('');
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
