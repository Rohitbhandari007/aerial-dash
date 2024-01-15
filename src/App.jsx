import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import MainLayout from './layout/MainLayout';

const App = () => {

  return (
    <Router>
      <div className="app">
       <MainLayout />
      </div>
    </Router>
  );
};



export default App;
