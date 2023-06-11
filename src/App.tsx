import React from 'react';


import '../src/styles/style.scss'
import WebSiteRoutes from './Routes/WebSiteRoutes';
import { Route, Routes } from 'react-router';
import DashboardRoutes from './Routes/DashboardRoutes';

function App() {
  return (
    <div className="App">
      <Routes>
    <Route path='/*' element={<WebSiteRoutes/>} />
    <Route path='/traders-central/*' element={<DashboardRoutes/>} />
     
      </Routes>
    </div>
  );
}

export default App;
