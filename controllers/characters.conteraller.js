'use strict';

const superagent = require('superagent');
const CharactersModel = require('../models/characters.model');

const getCharacters = async (req, res) => {
  // res.send(`${process.env.API_URL}/characters?limit=10`);
  const url = `${process.env.API_URL}/characters?limit=10`;

  superagent.get(url).then(data => {
    const dataFromat = data.body.map(result => new CharactersModel(result));
    res.send(dataFromat);
  }).catch(err => {
    console.log(err);
  });

};


module.exports = {
  getCharacters,
}