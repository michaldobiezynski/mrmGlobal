const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator/check');

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
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    res.send('Drinks route');
  },
);

module.exports = router;
