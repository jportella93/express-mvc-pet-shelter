const petModel = require('../models/pet')

// Data is handled by the model, so we ask it to retrieve it
const renderPetsView = (req, res) => {
  const petsData = petModel.getPets();
  res.render('pets', {pets: petsData, title: 'My pets'});
}

// To add a new pet, we also ask the model
const addPet = (req, res) => {
  const newPet = req.body.pet;
  if (newPet) {
    petModel.addPet(newPet)
  }
  renderPetsView(req, res)
}

module.exports = {
  renderPetsView,
  addPet
}
