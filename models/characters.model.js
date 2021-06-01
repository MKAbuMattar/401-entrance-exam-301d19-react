'use strict';

class CharactersModel {
  constructor(data) {
    this.name = data.name;
    this.gender = data.gender;
    this.image = data.img;
    this.psiPowers = data.psiPowers;
  }
}


module.exports = CharactersModel;