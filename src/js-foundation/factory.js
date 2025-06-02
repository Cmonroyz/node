const { getAge, getUUID } = require('../plugins');

const buildPerson =({name, birthdate}) => {
  return {
    id: getUUID(),
    name: name,
    birthdate: birthdate,
    age: getAge(birthdate),
  }
}
const obj = {
  name:'carlos',
  birthdate:'1991-10-26'
};

const john = buildPerson(obj);
console.log(john);