const express = require('express');
const app = express();
const Recipe = require('./models/Recipe');

app.use(express.json());
app.use('/api/v1/recipes', require('../routes/Recipes'));

// create recipe
// find recipe by id
// update recipe by id
// delete recipe by id




module.exports = app;

//
