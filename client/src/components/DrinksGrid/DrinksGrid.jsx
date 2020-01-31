import React from 'react';
import { useAlert } from 'react-alert';

import './DrinksGrid.css';

const DrinksGrid = ({ drinks, drinkCategory }) => {
  return drinks ? (
    drinkCategory ? (
      <div className='drinks-wrapper'>
        {drinks
          .filter(drink => drink.category === drinkCategory)
          .map(drink => {
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
    ) : (
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
    )
  ) : (
    <h2>There are not drinks.</h2>
  );
};

export default DrinksGrid;
