import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import NavBarTop from '../components/navBarTop';
import Banner from '../components/Banner';
import GetStarted from '../pages/getStarted';
import Recipes from '../pages/recipes';
import Calendar from '../pages/calendar';

let isMealPlan = true;  // replace with a state variable

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
            <Route path="/" element={isMealPlan ? <Calendar /> : <GetStarted />} />
            <Route path="/recipes" element={<Recipes/>} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
