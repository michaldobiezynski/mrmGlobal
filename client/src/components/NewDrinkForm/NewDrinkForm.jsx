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

    if (enteredName.trim().length === 0) {
      alert.error('Name cannot be empty!');
    } else if (enteredDesc.trim().length === 0) {
      alert.error('Description cannot be empty!');
    } else if (enteredName.length > 35) {
      alert.error('Name cannot be longer than 35 characters!');
    } else if (enteredDesc.length > 725) {
      alert.error('Description cannot be longer than 725 characters!');
    } else {
      onAdd(newDrink);

      setSelectedCategory('Beers');
      setEnteredName('');
      setEnteredDesc('');

      alert.success('Drink successfully added!');
    }
  };

  return (
    <form onSubmit={onSubmit} className='drink-form'>
      <h2 className='drink-form-title'>New drink</h2>
      <label>Name: </label>
      <br />
      <textarea
        className='textarea'
        cols='50'
        rows='1'
        required
        value={enteredName}
        onChange={handleNameChange}></textarea>
      <br />
      <br />
      <label>Description:</label>
      <br />
      <textarea
        className='textarea'
        required
        rows='10'
        cols='100'
        value={enteredDesc}
        onChange={handleDescChange}></textarea>
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
      <button className='formButton' type='submit'>
        ADD DRINK
      </button>
    </form>
  );
};

export default NewDrinkForm;
