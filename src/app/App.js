import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import ROUTES from './routes';
import NavBarTop from '../components/NavBarTop/NavBarTop';
import Banner from '../components/Banner';
import GetStarted from '../pages/getStarted';
import Recipes from '../pages/recipes';
import Calendar from '../pages/calendar';
import Planner from '../pages/planner';

import GlobalStyle from '../GlobalStyles.style';
import AppContainer from './AppContainer.style';
import PageContainer from '../pages/PageContainer.style';
import NavBarTopContainer from '../components/NavBarTop/NavBarTopContainer.style';


let isMealPlan = false;  // replace with a state variable

function App() {
  return (
    <Router>
      <GlobalStyle />
      <AppContainer >
        <NavBarTop />
        <PageContainer>
          <Banner />
          <Routes>
            <Route path={ROUTES.homeRoute()} element={isMealPlan ? <Calendar /> : <GetStarted />} />
            <Route path={ROUTES.recipesRoute()} element={<Recipes />} />
            <Route path={ROUTES.plannerRoute()} element={<Planner />} />
          </Routes>
        </PageContainer>
      </AppContainer>
    </Router>
  );
}

export default App;
