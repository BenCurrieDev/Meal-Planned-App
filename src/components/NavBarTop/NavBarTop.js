// import ROUTES from "../../app/routes";
// import { NavLink } from "react-router-dom";

// let isMealPlan = false;  // replace with a state variable
// let currentDayView = 'Today';  // replace with a state variable

const NavBarTop = () => {
	return (
		<div className="flex justify-between bg-gray-700 h-14 fixed z-20 top-0 w-screen">
			<img src="./Logo-White-117x35.png" alt="logo" className="py-4 pl-6" />
			<span className="material-symbols-outlined text-white flex items-center text-2xl pr-6">
				menu
			</span>
		</div>
	)
}


// Original desktop first code
/* const NavBarTop = () => {
  return (
	<nav className="border-2 flex justify-between">
	  <div>Logo</div>
	  <ul className="border-2 flex">
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
} */

export default NavBarTop;