import { NavLink } from "react-router-dom";

import ROUTES from "../app/routes";

let isMealPlan = false;  // replace with a state variable



const NavBarTop = () => {
    return (
        <div>
            <p>Replace this pTag with logo</p>
            <ul>
              <li>
                <NavLink to={isMealPlan ? ROUTES.calendarRoute() : ROUTES.getStartedRoute()} activeClassName="active">
                    {isMealPlan ? 'Today' : 'Get Started' }
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
        </div>
    )
}

export default NavBarTop;