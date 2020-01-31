import React from 'react';

import './Header.css';

const Header = ({ drinkButtonHandler }) => {
  const onClickHandler = event => {
    console.log(event.target.id);
    drinkButtonHandler(event.target.id);
  };

  return (
    <div className='main-header'>
      <h1 className='header-title'>MRM GLOBAL</h1>
      <div className='options-container'>
        <button onClick={onClickHandler} id='All' className='option-button'>
          ALL
        </button>
        <button onClick={onClickHandler} id='Beers' className='option-button'>
          BEERS
        </button>
        <button onClick={onClickHandler} id='Wines' className='option-button'>
          WINES
        </button>
        <button
          onClick={onClickHandler}
          id='Cocktails'
          className='option-button'>
          COCKTAILS
        </button>
        <button className='option-button'>ADD DRINK</button>
      </div>
    </div>
  );
};

export default Header;
