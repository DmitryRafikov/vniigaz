
controller = require("../../controllers/crudItemController");
serviceInterface  = require("../../models/services/interfaces/ItemServiceInterface");
championshipService = require("../../models/services/implementations/ChampionshipService")
studyService = require("../../models/services/implementations/StudyService");
scienificManagementService = require("../../models/services/implementations/ScienificManagementService");
grandService = require("../../models/services/implementations/GrandService");

class controllerHelper
{
    addItemsToChampionship(req, res, next)
    {
        championshipController = new controller(championshipService);
        controller.addItems(req, res, next);
    }
}