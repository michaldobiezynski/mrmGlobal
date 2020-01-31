import React, { useState } from 'react';

import './NewDrinkForm.css';

const NewDrinkForm = () => {
  const [selectedCategory, setSelectedCategory] = useState('Beers');

  const handleCategoryChange = event => {
    setSelectedCategory(event.target.value);
  };

  const onSubmit = event => {
    event.preventDefault();
    console.log('You have picked: ' + selectedCategory);
  };

  return (
    <form onSubmit={onSubmit}>
      <p>New drinks form</p>
      <label>Name: </label>
      <br />
      <input></input>
      <br />
      <br />
      <label>Description:</label>
      <br />
      <input></input>
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
