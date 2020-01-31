import React, { useState } from 'react';
import { useAlert } from 'react-alert';

import './NewDrinkForm.css';

const NewDrinkForm = ({ onAdd }) => {
  const alert = useAlert();
  const [selectedCategory, setSelectedCategory] = useState('Beers');
  const [enteredName, setEnteredName] = useState('');
  const [enteredDesc, setEnteredDesc] = useState('');

  const handleCategoryChange = event => {
    setSelectedCategory(event.target.value);
  };

  const handleNameChange = event => {
    setEnteredName(event.target.value);
  };
  const handleDescChange = event => {
    setEnteredDesc(event.target.value);
  };

  const onSubmit = event => {
    event.preventDefault();

    const newDrink = {
      name: enteredName,
      description: enteredDesc,
      category: selectedCategory,
    };

    onAdd(newDrink);

    setSelectedCategory('Beers');
    setEnteredName('');
    setEnteredDesc('');

    alert.success('Drink successfully added!');
  };

  return (
    <form onSubmit={onSubmit}>
      <p>New drinks form</p>
      <label>Name: </label>
      <br />
      <input value={enteredName} onChange={handleNameChange}></input>
      <br />
      <br />
      <label>Description:</label>
      <br />
      <input value={enteredDesc} onChange={handleDescChange}></input>
      <br />
      <br />
      <label>Category:</label>
      <br />
      <label>
        <input
          type='radio'
          value='Beers'
          checked={selectedCategory === 'Beers'}
          onChange={handleCategoryChange}
        />
        Beers
      </label>
      <label>
        <input
          type='radio'
          value='Wines'
          checked={selectedCategory === 'Wines'}
          onChange={handleCategoryChange}
        />
        Wines
      </label>
      <label>
        <input
          type='radio'
          value='Cocktails'
          checked={selectedCategory === 'Cocktails'}
          onChange={handleCategoryChange}
        />
        Cocktails
      </label>
      <br />
      <br />
      <button type='submit'>ADD DRINK</button>
    </form>
  );
};

export default NewDrinkForm;
