const GrandsController = require('../controllers/grandsController');
const controllerHelper = require('./ helpers/itemControllerHelper');
const Router = require('express');
const router = new Router();

router.get('/championships', controllerHelper.getItemsFromChampionship);
//router.post('/championships', controllerHelper.addItemsToChampionship); 
router.post('/championships', controllerHelper.updateItemAtChampionship); 
// router.get('/grands', GrandsController.getItems);
// router.post('/grands', GrandsController.addItems);
// router.get('/projectgroups', ChampionshipController.getItems);
// router.post('/projectgroups', ChampionshipController.addItems);
// router.get('/scienificmanagement', ChampionshipController.getItems);
// router.post('/scienificmanagement', ChampionshipController.addItems);
// router.get('/study', ChampionshipController.getItems);
// router.post('/study', ChampionshipController.addItems);
module.exports = router;