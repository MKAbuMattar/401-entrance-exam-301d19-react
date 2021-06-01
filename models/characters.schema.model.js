'use strict';

const mongoose = require('mongoose');

const favoriteCharacters = mongoose.Schema({
  name: {
    type: String,
    trim: true,
    unique: true,
    lowercase: true
  },
  slug: {
    type: String,
    trim: true,
    unique: true,
    lowercase: true
  },
  gender: String,
  psiPowers: []
})


const favoriteCharactersModle = mongoose.model('favorite_characters', favoriteCharacters);

module.exports = favoriteCharactersModle;