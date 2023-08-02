const sequelize = require('../../domain/db');
const ItemServiceInterface = require('../interfaces/ItemServiceInterface');


class StudyService extends ItemServiceInterface{

    /**
     * @param {Study} study 
     * @returns {Boolean} true
     */
    async create(study) {
        try {
            const result = await sequelize.models.study.create(study);
            return true;
        } catch (err) {
            return false;
        };
    }

     /**
     * @param {Study[]} studyRange 
     * @returns {Boolean} true
     */
    async updateOrCreateRange(studyRange)
    {
        try {
            for(const study of studyRange)
            {
                const result = await sequelize.models.study.findOne(study, {
                    where:{
                        id: study.id
                    }
                });
                if(result){
                    await sequelize.models.study.update(study, {
                        where: {
                            id: id
                        }
                    });
                }
                else this.create(study);
            }
            return true;
        } catch (err) {
            return false;
        }
    }

    /**
     * @param {Study} study
     * @returns {Boolean} true
     */
    async update(study){
        try {
            await sequelize.models.study.update(study, {
                where: {
                    id: study.id
                }
            });
            return true;
        } catch (err) {
            return false;
        }
    }

    /**
     * @returns {Study[]} 
     */
    async getAllRecords(){
        try { await sequelize.models.study.findAll()}
        catch (err) { return null; }
    }

    /**
     * @param {Study} study
     * @returns {Boolean} true
     */
    async delete(study) {
        try { 
            await sequelize.models.study.delete(study, {
                where:{
                    id: study.id
                }
            }); 
            return true; 
        } catch (err) { 
            return false; 
        }
    }
}

module.exports = new StudyService();