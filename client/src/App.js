import React, { useState, Fragment } from 'react';

import { products } from './data/products';
import DrinksGrid from './components/DrinksGrid/DrinksGrid';

import './App.css';

function App() {
  const [allDrinks, setAllDrinks] = useState(products);
  const [beers, setBeers] = useState(
    products.filter(beer => {
      return beer.category === 'Beers';
    }),
  );
  const [wines, setWines] = useState(
    products.filter(wine => {
      return wine.category === 'Wines';
    }),
  );
  const [cocktails, setCocktailss] = useState(
    products.filter(cocktail => {
      return cocktail.category === 'Cocktails';
    }),
  );
  const [drinks, setDrinks] = useState(allDrinks);

  return (
    <Fragment>
      <h1>MRM Global</h1>
      <div className='toggleButtons'>
        <button onClick={() => setDrinks(allDrinks)}>All</button>
        <button onClick={() => setDrinks(beers)}>Beers</button>
        <button onClick={() => setDrinks(wines)}>Wines</button>
        <button onClick={() => setDrinks(cocktails)}>Cocktails</button>
      </div>
      <DrinksGrid drinks={drinks} />
    </Fragment>
  );
}

export default App;
