import React, { useState, Fragment } from 'react';

import { products } from './data/products';
import DrinksGrid from './components/DrinksGrid/DrinksGrid';
import NewDrinkForm from './components/NewDrinkForm/NewDrinkForm';
import Header from './components/Header/Header';

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

  const drinkButtonHandler = ({ category }) => {
    setShowDrinks(true);
    setDrinkCategory(prevState => {
      setDrinkCategory(category);
    });
  };

  return (
    <Fragment>
      <Header drinkButtonHandler={drinkButtonHandler} />>
      {/* {showDrinks ? (
        <div className='toggleButtons'>
          <button onClick={() => setDrinkCategory('All')}>All</button>
          <button onClick={() => setDrinkCategory('Beers')}>Beers</button>
          <button onClick={() => setDrinkCategory('Wines')}>Wines</button>
          <button onClick={() => setDrinkCategory('Cocktails')}>
            Cocktails
          </button>
        </div>
      ) : (
        <p></p>
      )} */}
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
