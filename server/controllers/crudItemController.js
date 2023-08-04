const ApiError = require("../error/apiError");
const ItemServiceInterface = require("../models/services/interfaces/ItemServiceInterface");

class ItemController {
    constructor(args)
    {
        this.itemService = args;
    }
    itemService;
    async addItems(req, res, next) {
        const {items} = req.body;
        for(const item of items) {
            try{
                const result = await this.itemService.create(item);
                res.json({result});
            } catch(error) {
                next(ApiError.internalServerError(error));
            }
        }
    }

    async getItems(req, res, next) {
        try{
            const result = await this.itemService.getAllRecords();
            res.json({result});
        }catch(error) {
            console.log(error);
            next(ApiError.internalServerError(error));
        }
    }

    async updateItem(req, res, next) {
        const {item} = req.body;
        try{
            const result = await this.itemService.updateItem(item);
            res.json({result});
        }catch(error) {
            console.log(error);
            next(ApiError.internalServerError(error));
        }
    }
}

module.exports = ItemController;