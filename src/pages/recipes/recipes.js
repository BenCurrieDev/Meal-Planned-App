import NewRecipeForm from '../../components/NewRecipeForm/NewRecipeForm';
import RecipeDisplayArea from '../../components/RecipeDisplayArea/RecipeDisplayArea';
import * as S from './styles';
import { useState } from 'react';
import EditRecipeForm from '../../components/EditRecipeForm/EditRecipeForm';
import RecipeDetailedView from '../../components/RecipeDetailedView/RecipeDetailedView';
import { bottomViewNavs } from './viewNavs';
import BrowseRecipes from '../../components/BrowseRecipes/BrowseRecipes';




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
      {view === 'displayRecipes' && <S.ManagementContainer><RecipeDisplayArea viewDetails={viewDetails}/></S.ManagementContainer>}
      {view === 'addRecipe' && <S.ManagementContainer><NewRecipeForm backToBook={backToBook}/></S.ManagementContainer>}
      {view === 'browseRecipes' && <S.ManagementContainer><BrowseRecipes /></S.ManagementContainer>}
      {view === 'detailedRecipe' && <S.ManagementContainer><RecipeDetailedView recipe={activeRecipe} backToBook={backToBook} editRecipe={editRecipe}/></S.ManagementContainer>}
      {view === 'editRecipe' && <S.ManagementContainer><EditRecipeForm recipe={activeRecipe} viewDetails={viewDetails}/></S.ManagementContainer>}
      <nav>
        {bottomViewNavs[view].map(({text, newView}, index) => <button key={index} onClick={() => setView(newView)}>{text}</button>)}
      </nav>
    </main>
  );
}

export default Recipes;