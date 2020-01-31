import React from 'react';

import './DrinksGrid.css';

const DrinksGrid = ({ drinks }) => {
  return drinks ? (
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
  ) : (
    <h2>There are not drinks.</h2>
  );
};

export default DrinksGrid;
