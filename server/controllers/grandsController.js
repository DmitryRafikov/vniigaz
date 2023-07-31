const ApiError = require("../error/apiError");
const GrandService = require("../models/services/implementations/GrandService");

class GrandsController {
    async addItems(req, res, next) {
        const {grands} = req.body.grands;
        for(const grand of grands) {
            try{
                const result = await GrandService.create(grand);
                res.json(result);
            } catch(error) {
                next(ApiError.internalServerError(error));
            }
        }
    }

    async getItems(req, res, next) {
        try{
            const result = await GrandService.getAllRecords();
            res.json(result);
        }catch(error) {
            next(ApiError.internalServerError(error));
        }
    }
}

module.exports = new GrandsController();