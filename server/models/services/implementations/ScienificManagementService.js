const sequelize = require('../../domain/db');


class ScienificManagementService {

    /**
     * @param {ScienificManagement} scienificManagement 
     * @returns {Boolean} true
     */
    async create(scienificManagement) {
        try {
            const result = await sequelize.models.scienificManagement.create(scienificManagement);
            return true;
        } catch (err) {
            return false;
        };
    }

     /**
     * @param {ScienificManagement[]} scienificManagementRange 
     * @returns {Boolean} true
     */
    async updateOrCreateRange(scienificManagementRange)
    {
        try {
            for(const scienificManagement of scienificManagementRange)
            {
                const result = await sequelize.models.scienificManagement.findOne(scienificManagement, {
                    where:{
                        id: scienificManagement.id
                    }
                });
                if(result){
                    await sequelize.models.scienificManagement.update(scienificManagement, {
                        where: {
                            id: id
                        }
                    });
                }
                else this.create(scienificManagement);
            }
            return true;
        } catch (err) {
            return false;
        }
    }

    /**
     * @param {ScienificManagement} scienificManagement
     * @returns {Boolean} true
     */
    async update(scienificManagement){
        try {
            await sequelize.models.scienificManagement.update(scienificManagement, {
                where: {
                    id: scienificManagement.id
                }
            });
            return true;
        } catch (err) {
            return false;
        }
    }

    /**
     * @returns {ScienificManagement[]} 
     */
    async getAllRecords(){
        try { await sequelize.models.scienificManagement.findAll()}
        catch (err) { return null; }
    }

    /**
     * @param {ScienificManagement} scienificManagement
     * @returns {Boolean} true
     */
    async delete(scienificManagement) {
        try { 
            await sequelize.models.scienificManagement.delete(scienificManagement, {
                where:{
                    id: scienificManagement.id
                }
            }); 
            return true; 
        } catch (err) { 
            return false; 
        }
    }
}

module.exports = new ScienificManagementService();