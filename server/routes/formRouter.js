const GrandsController = require('../controllers/grandsController');
const ChampionshipController = require('../controllers/championshipController');
const Router = require('express');
const router = new Router();

router.get('/grands', GrandsController.getItems);
router.post('/grands', GrandsController.addItems);
router.get('/championships', ChampionshipController.getItems);
router.post('/championships', ChampionshipController.addItems);
router.get('/projectgroups', ChampionshipController.getItems);
router.post('/projectgroups', ChampionshipController.addItems);
router.get('/scienificmanagement', ChampionshipController.getItems);
router.post('/scienificmanagement', ChampionshipController.addItems);
router.get('/study', ChampionshipController.getItems);
router.post('/study', ChampionshipController.addItems);
module.exports = router;