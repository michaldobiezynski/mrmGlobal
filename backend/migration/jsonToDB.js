const fs = require('fs');
const mongoose = require('mongoose');

mongoose.connect(
  'mongodb+srv://michal123:michal123@devconnector-6tf9d.mongodb.net/mrmGlobal?retryWrites=true&w=majority',
  { useNewUrlParser: true, useUnifiedTopology: true },
);

const DrinkSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
});

const Drink = mongoose.model('drink', DrinkSchema);

let productsData = fs.readFileSync('../data/products.json');

let products = JSON.parse(productsData);

Drink.insertMany(products, (error, prodcuts) => {
  if (error) {
    console.error(error.message);
    mongoose.disconnect();
  } else {
    console.info(
      '%d drinks were successfully added to the database',
      products.length,
    );
    mongoose.disconnect();
  }
});
