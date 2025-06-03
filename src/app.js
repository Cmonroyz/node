const { getAge, getUUID } = require('./plugins');
//const {buildMakePerson} = require('./js-foundation/factory');
const getPokemonById = require('./js-foundation/promeses');
const { buildLogger } = require('./plugins');


const logger = buildLogger('app.js');
logger.log('Hola, estoy iniciando la aplicación');
logger.error('Esto es algo malo');

// getPokemonById(3)
//   .then((pokemon) => console.log({pokemon}))
//   .catch((error) => console.log('Error fetching Pokémon:'))
//   .finally(() => console.log('Finished fetching Pokémon'));


// !referencia a factory funcion
// const makePerson = buildMakePerson({ getAge, getUUID });

// const obj = {name: 'John Doe', birthdate: '1990-01-01'};

// const jhon = makePerson(obj);
// console.log({jhon});