import NewRecipeForm from '../../components/NewRecipeForm/NewRecipeForm';
import * as S from './styles';




let recipeMode = 'recipes/add';


const Recipes = () => {
  return (
    <main>
      <h2>Manage your recipes</h2>
      <S.ManagementContainer>
        <h2>Recipes</h2>
        {recipeMode === 'recipes/view' && <h3>RECIPE VIEW</h3>}
        {recipeMode === 'recipes/add' && <NewRecipeForm />}
        <h4>Add Recipe</h4>

      </S.ManagementContainer>
    </main>
  );
}

export default Recipes;