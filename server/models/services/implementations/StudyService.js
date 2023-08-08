const studies = require('../../domain/enitites/study');
const ItemServiceInterface = require('../interfaces/ItemServiceInterface');

class StudyService extends ItemServiceInterface{

    async itemExists(id){
        try {
            const result = await studies.findOne({
                where:{
                    id
                }
            });
            return result? true : false;
        } catch (err) {
            return false;
        };
    }
    async getItemById(id){
        try {
            const result = await studies.findOne({
                where:{
                    id
                }
            });
            return result;
        } catch (err) {
            return false;
        };
    }
    /**
     * @param {Study} study 
     * @returns {Boolean} true
     */
    async updateOrCreate(study) {
        try {
            const result = await studies.findOne(study, {
                where:{
                    id: study.id
                }
            });
            if(result) {
                await studies.update(study, {
                    where: {
                        id: id
                    }
                });
            }
            else await studies.create(study);
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
                const result = await studies.findOne(study, {
                    where:{
                        id: study.id
                    }
                });
                if(result){
                    await studies.update(study, {
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
     * @returns {Study[]} 
     */
    async getAllRecords(){
        try { 
            const result = await studies.findAll()
            return result
        }
        catch (err) { return null; }
    }

    /**
     * @param {Study} study
     * @returns {Boolean} true
     */
    async deleteItem(id) {
        try { 
            await studies.destroy({
                where:{
                    id
                }
            }); 
            return true; 
        } catch (err) { 
            return false; 
        }
    }
}

module.exports = new StudyService();