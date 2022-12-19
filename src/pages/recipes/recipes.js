import NewRecipeForm from '../../components/NewRecipeForm/NewRecipeForm';
import RecipeDisplayArea from '../../components/RecipeDisplayArea/RecipeDisplayArea';
import * as S from './styles';
import { useState } from 'react';
import EditRecipeForm from '../../components/EditRecipeForm/EditRecipeForm';
import RecipeDetailedView from '../../components/RecipeDetailedView/RecipeDetailedView';



const Recipes = () => {
  const [ view, setView ] = useState('displayRecipes');
  const [ activeRecipe, setActiveRecipe ] = useState('');
  // SHOULD BE ABLE TO USE USEFFECT TO SET RENDERED VIEW, 
  // THIS WILL REDUCE AMOUNT OF TIMES CONDITIONALS ARE EVALAUTED
  
  
  const backToBook = () => {
    setView('displayRecipes');
  }

  const viewDetails = (recipe) => {
    setActiveRecipe(recipe);
    setView('detailedRecipe');
  }

  const editRecipe = () => {
    console.log('Edit click registered');
    setView('editRecipe');
  }
  
  return (
    <main>
      <h2>Your Digital Recipe Book</h2>
      {view === 'displayRecipes' && <S.ManagementContainer><RecipeDisplayArea viewDetails={viewDetails}/><button onClick={() => setView('addRecipe')}>Create Recipe</button></S.ManagementContainer>}
      {view === 'addRecipe' && <S.ManagementContainer><NewRecipeForm backToBook={backToBook}/><button onClick={backToBook}>Back</button></S.ManagementContainer>}
      {view === 'detailedRecipe' && <S.ManagementContainer><RecipeDetailedView recipe={activeRecipe} backToBook={backToBook} editRecipe={editRecipe}/><button onClick={backToBook}>Back</button></S.ManagementContainer>}
      {view === 'editRecipe' && <S.ManagementContainer><EditRecipeForm recipe={activeRecipe} viewDetails={viewDetails}/><button onClick={() => viewDetails(activeRecipe)}>Cancel</button></S.ManagementContainer>}
    </main>
  );
}

export default Recipes;