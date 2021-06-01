'use strict';

const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3031;
const DB = process.env.DATABASE_URL;

//require controllers
const characterConteraller = require('./controllers/characters.conteraller');

//require CURD
const curdCurdavoriteConteraller = require('./controllers/curd.favorite.conteraller');

mongoose.connect(DB, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.use(cors());
app.use(express.json());


// API proof of life
app.get('/', (req, res) => {
  res.send('everything is working!')
});


//endpoint
app.get('/get-characters', characterConteraller.getCharacters);

//CRUD
app.post('/favorite', curdCurdavoriteConteraller.createFavorite);
app.get('/favorite', curdCurdavoriteConteraller.readFavorite);
app.put('/favorite/:slug', curdCurdavoriteConteraller.updateFavorite);
app.delete('/favorite/:slug', curdCurdavoriteConteraller.delateFavorite);

app.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}/`);
});