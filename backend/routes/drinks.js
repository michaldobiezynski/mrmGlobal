const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');

const Drink = require('../models/Drink');

//@route    POST /drinks/add
//@desc     Add a drink
//@access   Public
router.post(
  '/add',
  [
    check(
      'name',
      'Name needs to be between 1 and 35 characters long.',
    ).isLength({ min: 1, max: 35 }),
    check(
      'description',
      'Description needs to be between 1 and 725 characters long.',
    ).isLength({ min: 1, max: 725 }),
    check(
      'category',
      'Category needs to be between 1 and 35 characters long.',
    ).isLength({ min: 1, max: 35 }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, description, category } = req.body;

    try {
      let drink = await Drink.findOne({ name });

      if (drink) {
        return res
          .status(400)
          .json({ errors: [{ msg: 'Drink already exists' }] });
      }

      drink = new Drink({
        name,
        description,
        category,
      });

      await drink.save();

      res.send('Drink added!');
    } catch (error) {
      console.error(error.message);
      res.status(500).send('Server error');
    }
  },
);

//@route    Get /drinks/all
//@desc     Get all drinks
//@access   Public
router.get('/all', async (req, res) => {
  try {
    const drinks = await Drink.find();
    res.json(drinks);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server Error');
  }
});

//@route    Get /drinks/category/:category
//@desc     Get all drinks in a given category
//@access   Public
router.get('/category/:category', async (req, res) => {
  try {
    const drinks = await Drink.find({
      category: req.params.category,
    });
    if (drinks.length === 0) {
      res.json({ msg: 'No drinks in this category' });
    }
    res.json(drinks);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
