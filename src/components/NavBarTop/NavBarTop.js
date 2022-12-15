import { NavLink } from "react-router-dom";

import ROUTES from "../../app/routes";

import * as S from './styles'



let isMealPlan = false;  // replace with a state variable
let currentDayView = 'Today';  // replace with a state variable

const NavBarTop = () => {
  return (
    <S.NavBarTop>
      <S.Logo />
      <S.NavList>
        <li>
          <S.StyledNavLink to={ROUTES.homeRoute()} activeClassName="active">
            {isMealPlan ? currentDayView : 'Get Started'}
          </S.StyledNavLink>
        </li>
        <li>
          <S.StyledNavLink to={ROUTES.recipesRoute()} activeClassName="active">
            Recipes
          </S.StyledNavLink>
        </li>
        <li>
          <S.StyledNavLink to={ROUTES.plannerRoute()} activeClassName="active">
            Planner
          </S.StyledNavLink>
        </li>
      </S.NavList>
    </S.NavBarTop>
  )
}

export default NavBarTop;