'use strict';
const favoriteCharactersModle = require('../models/characters.schema.model');

const createFavorite = async (req, res) => {
  const {
    name,
    gender,
    psiPowers
  } = req.body;
  const sulg = `${name}`.toLowerCase().split(' ').join('-');
  favoriteCharactersModle.find({ sulg: sulg }, (err, data) => {
    if (data.length > 0) {
      res.send('allready exiext');
    } else {
      const newFavorite = new favoriteCharactersModle({
        name: name,
        slug: sulg,
        gender: gender,
        psiPowers: psiPowers,
      });
      newFavorite.save();
      res.send(newFavorite);
    }
  });
}


const readFavorite = async (req, res) => {
  favoriteCharactersModle.find({}, (err, data) => {
    res.send(data);
  });

}

const delateFavorite = async (req, res) => {
  const slug = req.params.slug;
  favoriteCharactersModle.remove({ slug: slug }, (err, data) => {
    if (err) {
      res.send(err);
    } else {
      favoriteCharactersModle.find({}, (err, data) => {
        res.send(data);
      });
    }
  });

}

const updateFavorite = async (req, res) => {
  const {
    name,
    gender
  } = req.body;
  const slug = req.params.slug;
  favoriteCharactersModle.find({ slug: slug }, (err, data) => {
    if (err) {
      res.send(err);
    } else {
      data[0].name = name;
      data[0].gender = gender;
      data[0].save();
    }
    favoriteCharactersModle.find({}, (err, data) => {
      res.send(data);
    });
  });
}

module.exports = {
  createFavorite,
  readFavorite,
  delateFavorite,
  updateFavorite
}