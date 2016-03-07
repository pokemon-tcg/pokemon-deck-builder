var PokemonStore = require('./pokemon.store');
var CardDataStore = require('./card-data.store');

module.exports = {
  PokemonStore: new PokemonStore(),
  CardDataStore: new CardDataStore(),
};
