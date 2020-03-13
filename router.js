const express = require('express')
const router = express.Router()

const petsController = require('./controllers/pets')
const viewsController = require('./controllers/views')

// Router just passes requests to their corresponding controller
router.get('/', viewsController.renderIndexView)
router.get('/pets', petsController.renderPetsView)
router.post('/pets', petsController.addPet)

// 404 fallback
router.all('*', viewsController.renderNotFoundView)

module.exports = router
