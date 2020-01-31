import React from 'react';

import Drink from '../Drink/Drink';

import './DrinksGrid.css';

const DrinksGrid = ({ drinks, drinkCategory, onRemove }) => {
  return drinkCategory ? (
    drinks.filter(drink => drink.category === drinkCategory).length !== 0 ? (
      <div className='drinks-wrapper'>
        {drinks
          .filter(drink => drink.category === drinkCategory)
          .map(drink => {
            return <Drink key={drink.name} drink={drink} onRemove={onRemove} />;
          })}
      </div>
    ) : (
      <h2>There are no drinks in this category!</h2>
    )
  ) : drinks.length !== 0 ? (
    <div className='drinks-wrapper'>
      {drinks.map(drink => {
        return <Drink key={drink.name} drink={drink} onRemove={onRemove} />;
      })}
    </div>
  ) : (
    <h2>There are no drinks at all!</h2>
  );
};

export default DrinksGrid;
