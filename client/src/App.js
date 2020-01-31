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

  const onRemove = name => {
    const drinkToBeRemoved = allDrinks.find(drink => drink.name === name);
    if (drinkToBeRemoved) {
      setAllDrinks(prevState => {
        return prevState.filter(drink => drink !== drinkToBeRemoved);
      });
    }
  };

  return (
    <Fragment>
      <h1>MRM Global</h1>
      <button onClick={() => setShowDrinks(!showDrinks)} className='addDrink'>
        {showDrinks ? 'Add drink' : 'Show drinks'}
      </button>
      {showDrinks ? (
        <div className='toggleButtons'>
          <button className='drinkButton' onClick={() => setDrinkCategory('All')}>All</button>
          <button className='drinkButton' onClick={() => setDrinkCategory('Beers')}>Beers</button>
          <button className='drinkButton' onClick={() => setDrinkCategory('Wines')}>Wines</button>
          <button className='drinkButton' onClick={() => setDrinkCategory('Cocktails')}>
            Cocktails
          </button>
        </div>
      ) : (
        <p></p>
      )}

      {showDrinks ? (
        drinkCategory === 'All' ? (
          <DrinksGrid drinks={allDrinks} onRemove={onRemove} />
        ) : (
          <DrinksGrid
            drinks={allDrinks}
            drinkCategory={drinkCategory}
            onRemove={onRemove}
          />
        )
      ) : (
        <NewDrinkForm onAdd={onAdd} />
      )}
    </Fragment>
  );
};

export default App;
