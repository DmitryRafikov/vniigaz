const ItemController = require("../../controllers/crudItemController");

controller = require("../../controllers/crudItemController");
serviceInterface  = require("../../models/services/interfaces/ItemServiceInterface");
championshipService = require("../../models/services/implementations/ChampionshipService")
//studyService = require("../../models/services/implementations/StudyService");
//scienificManagementService = require("../../models/services/implementations/ScienificManagementService");
//grandService = require("../../models/services/implementations/GrandService");

class controllerHelper
{
    addItemsToChampionship(req, res, next)
    {
        const championshipController = new ItemController(championshipService);
        championshipController.addItems(req, res, next);
    }

    getItemsFromChampionship(req, res, next)
    {
        const championshipController = new ItemController(championshipService);
        championshipController.getItems(req, res, next);
    }
    updateItemAtChampionship(req, res, next)
    {
        const championshipController = new ItemController(championshipService);
        championshipController.updateItem(req, res, next);
    }
}

module.exports = new controllerHelper();