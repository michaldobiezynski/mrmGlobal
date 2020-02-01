const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');

const Drink = require('../models/Drink');

//@route    POST /drinks
//@desc     Add a drink
//@access   Public
router.get(
  '/',
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
      'Category should be either Beers, Wines or Cocktails.',
    ).isIn(['Beers', 'Wines', 'Cocktails']),
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

      res.send('Drinks added!');
    } catch (error) {
      console.error(error.message);
      res.status(500).send('Server error');
    }
  },
);

module.exports = router;
