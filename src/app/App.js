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
            <Route path="/" element={<GetStarted />} />
            <Route path="/recipes" element={<Recipes/>} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
