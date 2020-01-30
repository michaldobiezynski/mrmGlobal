import React, { useState, Fragment } from 'react';

import { products } from './data/products';

import './App.css';

function App() {
  const [drinks, setDrinks] = useState(products);
  return (
    <Fragment>
      <h1>MRM Global</h1>
      <div className='drinks-wrapper'>
        {drinks.map(drink => {
          return (
            <div className='drink'>
              <p className='label'>Name:</p>
              <p>{drink.name}</p>
              <p className='label'>Description:</p>
              <p>{drink.description}</p>
              <p className='label'>Category:</p>
              <p>{drink.category}</p>
            </div>
          );
        })}
      </div>
    </Fragment>
  );
}

export default App;
