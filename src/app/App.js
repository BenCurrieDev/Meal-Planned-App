import React from 'react';
import {
	BrowserRouter as Router,
	Routes,
	Route
} from "react-router-dom";

import ROUTES from './routes';
import NavBarTop from '../components/NavBarTop/NavBarTop';
import GetStarted from '../pages/getStarted/getStarted';
import Recipes from '../pages/recipes/recipes';

function App() {
	return (

		<Router>
			<div className='h-full'>
				<NavBarTop />
				<div className='h-full'>
				<Routes>
					<Route path={ROUTES.homeRoute()} element={<GetStarted />} />
					<Route path={ROUTES.recipesRoute()} element={<Recipes />} />
				</Routes>
				</div>
			</div>
		</Router>
	);
}

export default App;
