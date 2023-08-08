const managements = require('../../domain/enitites/management');
const itemServiceInterface = require('../interfaces/ItemServiceInterface');

class ScienificManagementService extends itemServiceInterface
{

    async itemExists(id){
        try {
            const result = await managements.findOne({
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
            const result = await managements.findOne({
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
     * @param {Management} management 
     * @returns {Boolean} true
     */
    async updateOrCreate(management) {
        try {
            const result = await managements.findOne(management, {
                where:{
                    id: management.id
                }
            });
            if(result) {
                await managements.update(management, {
                    where: {
                        id: id
                    }
                });
            }
            else await managements.create(management);
            return true;
        } catch (err) {
            return false;
        };
    }

     /**
     * @param {Management[]} managementRange 
     * @returns {Boolean} true
     */
    async updateOrCreateRange(managementRange)
    {
        try {
            for(const management of managementRange)
            {
                const result = await managements.findOne(management, {
                    where:{
                        id: management.id
                    }
                });
                if(result){
                    await managements.update(management, {
                        where: {
                            id: id
                        }
                    });
                }
                else this.create(management);
            }
            return true;
        } catch (err) {
            return false;
        }
    }

    /**
     * @returns {Management[]} 
     */
    async getAllRecords(){
        try { 
            const result = await managements.findAll()
            return result
        }
        catch (err) { return null; }
    }

    /**
     * @param {Management} management
     * @returns {Boolean} true
     */
    async deleteItem(id) {
        try { 
            await managements.destroy({
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
module.exports = new ScienificManagementService();