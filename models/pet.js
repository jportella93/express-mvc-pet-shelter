const db = require('../db')

// The model is the only module that interacts with the db
const getPets = () => db.pets;

const addPet = (pet) => {
  db.pets.push(pet)
}

module.exports = {
  getPets,
  addPet
}
