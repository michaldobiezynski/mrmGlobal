import React, { useState } from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';

import HomePage from './pages/homepage/homepage.component.jsx';
import CategoryPage from './components/category/category.component';

const HatsPage = () => (
  <div>
    <h1>HATS PAGE </h1>
  </div>
);

function App() {

  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/categories' component={CategoryPage} />
      </Switch>
    </div>
  );
}

export default App;
