import React from 'react';
import { useAlert } from 'react-alert';

import logo from '../images/trash.png';

import './Drink.css';

const Drink = ({ drink, onRemove }) => {
  const alert = useAlert();

  const onRemoveHandler = event => {
    onRemove(event.target.id);
    alert.success('Drink successfully deleted!');
  };

  return (
    <div className='drink' key={drink.name}>
      <p className='label'>Name:</p>
      <p>{drink.name}</p>
      <br />
      <p className='label'>Description:</p>
      <p>{drink.description}</p>
      <br />
      <p className='label'>Category:</p>
      <p>{drink.category}</p>
      <img
        className='trash-image'
        id={drink.name}
        onClick={onRemoveHandler}
        src={logo}
        alt='trash'
      />
    </div>
  );
};

export default Drink;
