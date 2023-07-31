const ApiError = require("../error/apiError");
const ChampionshipService = require("../models/services/implementations/ChampionshipService");

class ChampionshipController {
    async addItems(req, res, next) {
        const {championships} = req.body.championships;
        for(const championship of championships) {
            try{
                const result = await ChampionshipService.create(championship);
                res.json(result);
            } catch(error) {
                next(ApiError.internalServerError(error));
            }
        }
    }

    async getItems(res, next) {
        try{
            const result = await ChampionshipService.getAllRecords();
            res.json(result);
        }catch(error) {
            next(ApiError.internalServerError(error));
        }
    }
}

module.exports = new ChampionshipController();