import * as S from './styles';

import ROUTES from '../../app/routes';

const GetStarted = () => {
  return (
    <main>
      <h2>App description here</h2>
      <h3>Quick guide here</h3>
      <h4>Replace with display link components</h4>
      <S.NavContainer>
        <S.StyledLink to={ROUTES.recipesRoute()}>
          <S.NavImage url="images/recipeBook.jpg">
            <h2>Recipes</h2>
          </S.NavImage>
        </S.StyledLink>
        <S.StyledLink to={ROUTES.plannerRoute()}>
          <S.NavImage url="images/planner.jpg">
            <h2>Planner</h2>
          </S.NavImage>
        </S.StyledLink>
      </S.NavContainer>
    </main>
  );
}

export default GetStarted;