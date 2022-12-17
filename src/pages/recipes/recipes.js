import NewRecipeForm from '../../components/NewRecipeForm/NewRecipeForm';
import * as S from './styles';
import { useState } from 'react';


const Recipes = () => {
  const [ view, setView ] = useState('displayRecipes');
  
  // SHOULD BE ABLE TO USE USEFFECT TO SET RENDERED VIEW, 
  // THIS WILL REDUCE AMOUNT OF TIMES CONDITIONALS ARE EVALAUTED

  
  return (
    <main>
      <h2>Manage your recipes</h2>
      <S.ManagementContainer>
        <h2>Recipes</h2>
        {view === 'displayRecipes' && <h3>RECIPE VIEW</h3>}
        {view === 'addRecipe' && <NewRecipeForm />}
        <button onClick={() => setView('displayRecipes')}>Manage Recipes</button>
        <button onClick={() => setView('addRecipe')}>Add Recipe</button>
      </S.ManagementContainer>
    </main>
  );
}

export default Recipes;