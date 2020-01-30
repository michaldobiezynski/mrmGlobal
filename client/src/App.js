import React, { useState, Fragment } from 'react';

import { products } from './data/products';

import './App.css';

function App() {
  const [drinks, setDrinks] = useState(products);
  return (
    <Fragment>
      <h1>MRM Global</h1>
      {drinks.map(drink => {
        return (
          <div className='drink'>
            <div className='drink-text'>
              <p >Name:</p>
              <p>{drink.name}</p>
              <p>Description:</p>
              <p>{drink.description}</p>
              <p>Category:</p>
              <p>{drink.category}</p>
            </div>
          </div>
        );
      })}
    </Fragment>
  );
}

export default App;
