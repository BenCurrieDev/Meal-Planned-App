import NewRecipeForm from '../../components/NewRecipeForm/NewRecipeForm';
import RecipeDisplayArea from '../../components/RecipeDisplayArea/RecipeDisplayArea';
import { useState } from 'react';
import EditRecipeForm from '../../components/EditRecipeForm/EditRecipeForm';
import RecipeDetailedView from '../../components/RecipeDetailedView/RecipeDetailedView';
import { bottomViewNavs } from './viewNavs';
import BrowseRecipes from '../../components/BrowseRecipes/BrowseRecipes';
import BrowseDetails from '../../components/BrowseDetails/BrowseDetails';




const Recipes = () => {
  const [ view, setView ] = useState('displayRecipes');
  const [ activeRecipe, setActiveRecipe ] = useState('');
  const [ browseId, setBrowseId ] = useState('');
  // SHOULD BE ABLE TO USE USEFFECT TO SET RENDERED VIEW, 
  // THIS WILL REDUCE AMOUNT OF TIMES CONDITIONALS ARE EVALUATED
  

  

  const backToBook = () => {
    setView('displayRecipes');
  }

  const viewDetails = (recipe="") => {
    recipe && setActiveRecipe(recipe);
    setView('detailedRecipe');
  }
  
  const browseDetails = (id) => {
    setBrowseId(id);
    setView('browseDetails');
  }


  const editRecipe = () => {
    setView('editRecipe');
  }

  
  return (
    <main className='min-h-full bg-gray-200'>
      <div className=" bg-gray-700">
        <h2 className="text-white text-3xl font-normal text-center py-6">Recipe Book</h2>
      </div>
      {view === 'displayRecipes' && <div><RecipeDisplayArea viewDetails={viewDetails}/></div>}
      {view === 'addRecipe' && <div><NewRecipeForm backToBook={backToBook}/></div>}
      {view === 'browseRecipes' && <div><BrowseRecipes browseDetails={browseDetails}/></div>}
      {view === 'detailedRecipe' && <div><RecipeDetailedView recipe={activeRecipe} backToBook={backToBook} editRecipe={editRecipe}/></div>}
      {view === 'browseDetails' && <div><BrowseDetails browseId={browseId} viewDetails={viewDetails}/></div>}
      {view === 'editRecipe' && <div><EditRecipeForm recipe={activeRecipe} viewDetails={viewDetails}/></div>}
      <nav className='flex justify-center'>
        {bottomViewNavs[view].map(({text, newView}, index) => <button key={index} onClick={() => setView(newView)} className="rounded-2xl bg-gray-700 text-gray-200 py-2 px-4 m-2 text-xl font-light mb-20">{text}</button>)}
      </nav>
    </main>
  );
}

export default Recipes;