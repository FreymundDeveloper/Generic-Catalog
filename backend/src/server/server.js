const express = require('express');
const cors = require('cors');
const path = require('path');
const data = require(path.join(__dirname, '..', 'data', 'data.json'));

const app = express();
const port = 3001;

app.use(cors());

app.get('/products', (req, res) => {
  const { types, sellers, sports, availableSizes, priceRange, name } = req.query;

  let filteredProducts = data;

  if (types !== undefined) {
    const selectedTypes = Array.isArray(types) ? types : types.split(',');

    filteredProducts = filteredProducts.filter(product => selectedTypes.includes(product.type));
  }

  if (sellers !== undefined) {
    const selectedSellers = Array.isArray(sellers) ? sellers : sellers.split(',');

    filteredProducts = filteredProducts.filter(product => selectedSellers.includes(product.seller));
  }

  if (sports !== undefined) {
    const selectedSports = Array.isArray(sports) ? sports : sports.split(',');

    filteredProducts = filteredProducts.filter(product => selectedSports.includes(product.sport));
  }

  if (availableSizes !== undefined) {
    const selectedSizes = Array.isArray(availableSizes) ? availableSizes : availableSizes.split(',');

    filteredProducts = filteredProducts.filter(product => {
      return product.available_sizes.some(size => selectedSizes.includes(size));
    });
  }

  if (priceRange !== undefined) {
    const maxPrice = parseFloat(priceRange);

    if (!isNaN(maxPrice)) filteredProducts = filteredProducts.filter(product => product.price <= maxPrice);
  }

  if (name !== undefined) {
    const lowercaseName = name.toLowerCase();
    filteredProducts = filteredProducts.filter(product => product.name.toLowerCase().includes(lowercaseName));
  }

  res.json(filteredProducts);
});

const server = app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
  });
  
  const closeServer = (callback) => { // For Jest Configuration.
    server.close(callback);
  };
  
  module.exports = { app, server, closeServer };