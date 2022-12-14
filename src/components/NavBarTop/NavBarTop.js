import { NavLink } from "react-router-dom";

import ROUTES from "../../app/routes";

import * as S from './styles'



let isMealPlan = false;  // replace with a state variable
let currentDayView = 'Today';  // replace with a state variable

const NavBarTop = () => {
  return (
    <S.NavBarTop>
      <p>Replace this pTag with logo</p>
      <ul>
        <li>
          <NavLink to={ROUTES.homeRoute()} activeClassName="active">
            {isMealPlan ? currentDayView : 'Get Started'}
          </NavLink>
        </li>
        <li>
          <NavLink to={ROUTES.recipesRoute()} activeClassName="active">
            Recipes
          </NavLink>
        </li>
        <li>
          <NavLink to={ROUTES.plannerRoute()} activeClassName="active">
            Planner
          </NavLink>
        </li>
      </ul>
    </S.NavBarTop>
  )
}

export default NavBarTop;