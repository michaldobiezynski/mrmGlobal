import React, { useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import HomePage from './pages/homepage/homepage.component.jsx';
import rootReducer from './reducers/rootReducer';

import './App.css';

const store = createStore(rootReducer);

function App() {
  return (
    <Provider store={store}>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/categories' component={HatsPage} />
      </Switch>
    </Provider>
  );
}

const HatsPage = () => {
  console.log();

  return <div></div>;
};

export default App;
