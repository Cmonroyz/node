const { getAge, getUUID } = require('./plugins');
const {buildMakePerson} = require('./js-foundation/factory');

const makePerson = buildMakePerson({ getAge, getUUID });

const obj = {name: 'John Doe', birthdate: '1990-01-01'};

const jhon = makePerson(obj);
console.log({jhon});