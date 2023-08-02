const ApiError = require("../error/apiError");
const studyService = require("../models/services/implementations/studyService");

class StudyController {
    async addItems(req, res, next) {
        const {studies} = req.body.studies;
        for(const study of studies) {
            try{
                const result = await studyService.create(study);
                res.json(result);
            } catch(error) {
                next(ApiError.internalServerError(error));
            }
        }
    }

    async getItems(res, next) {
        try{
            const result = await studyService.getAllRecords();
            res.json(result);
        }catch(error) {
            next(ApiError.internalServerError(error));
        }
    }
}

module.exports = new StudyController();