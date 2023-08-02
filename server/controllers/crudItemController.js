const ApiError = require("../error/apiError");
const itemService = require("../models/services/interfaces/ItemServiceInterface");

class ItemController {
    constructor(ItemServiceInterface)
    {
        this.itemService = ItemServiceInterface;
    }

    async addItems(req, res, next) {
        const {items} = req.body.items;
        for(const item of studies) {
            try{
                const result = await itemService.create(item);
                res.json(result);
            } catch(error) {
                next(ApiError.internalServerError(error));
            }
        }
    }

    async getItems(res, next) {
        try{
            const result = await itemService.getAllRecords();
            res.json(result);
        }catch(error) {
            next(ApiError.internalServerError(error));
        }
    }
}

module.exports = new ItemController();