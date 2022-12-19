import NewRecipeForm from '../../components/NewRecipeForm/NewRecipeForm';
import RecipeDisplayArea from '../../components/RecipeDisplayArea/RecipeDisplayArea';
import * as S from './styles';
import { useState } from 'react';


const Recipes = () => {
  const [ view, setView ] = useState('displayRecipes');
  
  // SHOULD BE ABLE TO USE USEFFECT TO SET RENDERED VIEW, 
  // THIS WILL REDUCE AMOUNT OF TIMES CONDITIONALS ARE EVALAUTED

  
  return (
    <main>
      <h2>Your Digital Recipe Book</h2>
      <S.ManagementContainer>
        {view === 'displayRecipes' && <RecipeDisplayArea />}
        {view === 'addRecipe' && <NewRecipeForm />}
        <button onClick={() => setView('displayRecipes')}>Manage Recipes</button>
        <button onClick={() => setView('addRecipe')}>Add Recipe</button>
      </S.ManagementContainer>
    </main>
  );
}

export default Recipes;