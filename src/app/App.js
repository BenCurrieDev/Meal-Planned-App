import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import ROUTES from './routes';
import NavBarTop from '../components/NavBarTop/NavBarTop';
import Banner from '../components/Banner/Banner';
import GetStarted from '../pages/getStarted/getStarted';
import Recipes from '../pages/recipes/recipes';
import Calendar from '../pages/calendar';
import Planner from '../pages/planner';


let isMealPlan = false;  // replace with a state variable

function App() {
  return (
    
    <Router>
      <div>
        <NavBarTop />
        <Banner />
        <div>
          <Routes>
            <Route path={ROUTES.homeRoute()} element={isMealPlan ? <Calendar /> : <GetStarted />} />
            <Route path={ROUTES.recipesRoute()} element={<Recipes />} />
            <Route path={ROUTES.plannerRoute()} element={<Planner />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
