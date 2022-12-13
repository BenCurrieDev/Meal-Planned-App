import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import ROUTES from './routes';
import NavBarTop from '../components/navBarTop';
import Banner from '../components/Banner';
import GetStarted from '../pages/getStarted';
import Recipes from '../pages/recipes';
import Calendar from '../pages/calendar';
import Planner from '../pages/planner';


let isMealPlan = false;  // replace with a state variable

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <NavBarTop />
          <Banner />
        </header>
        <main>
          <Routes>
            <Route path={ROUTES.homeRoute()} element={isMealPlan ? <Calendar /> : <GetStarted />} />
            <Route path={ROUTES.recipesRoute()} element={<Recipes />} />
            <Route path={ROUTES.plannerRoute()} element={<Planner />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
