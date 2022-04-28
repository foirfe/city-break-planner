import { Navigate, Route, Routes } from 'react-router-dom';
import React from 'react';
import './css/style.css';
import HomePage from './pages/HomePage';
import CityPage from './pages/CityPage';
import FilterPage from './pages/FilterPage';
import ResultsPage from './pages/ResultsPage';

function App() {
  return (
    <div className="App">
     <Routes>
       <Route path="/" element={<HomePage/>}/>
       <Route path="/cities" element={<CityPage/>}/>
       <Route path="/filter" element={<FilterPage/>}/>
       <Route path="/results" element={<ResultsPage/>}/>
       <Route path="*" element={<Navigate to="/"/>}/>
       </Routes>
    </div>
  );
}

export default App;
