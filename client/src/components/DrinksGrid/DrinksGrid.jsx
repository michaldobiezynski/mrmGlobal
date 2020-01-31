import React from 'react';

import Drink from '../Drink/Drink';

import './DrinksGrid.css';

const DrinksGrid = ({ drinks, drinkCategory, onRemove }) => {
  return drinkCategory ? (
    <div className='drinks-wrapper'>
      {drinks.filter(drink => drink.category === drinkCategory).length !== 0 ? (
        drinks
          .filter(drink => drink.category === drinkCategory)
          .map(drink => {
            return <Drink drink={drink} onRemove={onRemove} />;
          })
      ) : (
        <h2>There are no drinks in this category!</h2>
      )}
    </div>
  ) : (
    <div className='drinks-wrapper'>
      {drinks.length !== 0 ? (
        drinks.map(drink => {
          return <Drink drink={drink} onRemove={onRemove} />;
        })
      ) : (
        <h2>There are no drinks at all!</h2>
      )}
    </div>
  );
};

export default DrinksGrid;
