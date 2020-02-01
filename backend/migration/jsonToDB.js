const fs = require('fs');

const Drink = require('../models/Drink');

let productsData = fs.readFile('../data/products.json');

let products = JSON.parse(productsData);

Drink.insertMany(products);
