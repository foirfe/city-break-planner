import { Route, Routes } from 'react-router-dom';
import React from 'react';
import './App.css';
import HomePage from './pages/HomePage';
import CityPage from './pages/CityPage';
import FilterPage from './pages/FilterPage';
import ResultsPage from './pages/ResultsPage';

function App() {
  return (
    <div className="App">
     <Routes>
       <Route path="/" element={<HomePage/>}/>
       <Route path="/byer" element={<CityPage/>}/>
       <Route path="/filter" element={<FilterPage/>}/>
       <Route path="/resultater" element={<ResultsPage/>}/>
       </Routes>
    </div>
  );
}

export default App;
