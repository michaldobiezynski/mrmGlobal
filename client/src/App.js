import React, { useState, Fragment } from 'react';

import { products } from './data/products';
import DrinksGrid from './components/DrinksGrid/DrinksGrid';
import NewDrinkForm from './components/NewDrinkForm/NewDrinkForm';

import './App.css';

const App = () => {
  const [showDrinks, setShowDrinks] = useState(true);

  const [allDrinks, setAllDrinks] = useState(products);

  const [drinkCategory, setDrinkCategory] = useState('All');

  const onAdd = newDrink => {
    setAllDrinks(prevState => {
      return prevState.concat(newDrink);
    });
  };

  return (
    <Fragment>
      <h1>MRM Global</h1>
      <div className='toggleButtons'>
        <button onClick={() => setDrinkCategory('All')}>All</button>
        <button onClick={() => setDrinkCategory('Beers')}>Beers</button>
        <button onClick={() => setDrinkCategory('Wines')}>Wines</button>
        <button onClick={() => setDrinkCategory('Cocktails')}>Cocktails</button>
      </div>
      <button onClick={() => setShowDrinks(!showDrinks)} className='addDrink'>
        {showDrinks ? 'Add a drink' : 'Show drinks'}
      </button>
      {showDrinks ? (
        drinkCategory === 'All' ? (
          <DrinksGrid drinks={allDrinks} />
        ) : (
          <DrinksGrid drinks={allDrinks} drinkCategory={drinkCategory} />
        )
      ) : (
        <NewDrinkForm onAdd={onAdd} />
      )}
    </Fragment>
  );
};

export default App;
