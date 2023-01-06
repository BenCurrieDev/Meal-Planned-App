import ROUTES from "../../app/routes";
import { NavLink } from "react-router-dom";

let isMealPlan = false;  // replace with a state variable
let currentDayView = 'Today';  // replace with a state variable

const NavBarTop = () => {
  return (
    <nav>
      <div></div>
      <ul>
        <li>
          <NavLink to={ROUTES.homeRoute()}>
            {isMealPlan ? currentDayView : 'Get Started'}
          </NavLink>
        </li>
        <li>
          <NavLink to={ROUTES.recipesRoute()}>
            Recipes
          </NavLink>
        </li>
        <li>
          <NavLink to={ROUTES.plannerRoute()}>
            Planner
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default NavBarTop;