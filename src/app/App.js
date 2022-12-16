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
import Recipes from '../pages/recipes';
import Calendar from '../pages/calendar';
import Planner from '../pages/planner';

import GlobalStyle from '../GlobalStyles.style';
import * as S from './styles';


let isMealPlan = false;  // replace with a state variable

function App() {
  return (
    
    <Router>
      <GlobalStyle />
      <S.AppContainer >
        <NavBarTop />
        <Banner />
        <S.PageContainer>
          <Routes>
            <Route path={ROUTES.homeRoute()} element={isMealPlan ? <Calendar /> : <GetStarted />} />
            <Route path={ROUTES.recipesRoute()} element={<Recipes />} />
            <Route path={ROUTES.plannerRoute()} element={<Planner />} />
          </Routes>
        </S.PageContainer>
      </S.AppContainer>
    </Router>
  );
}

export default App;
