const grands = require('../../domain/enitites/grand');
const itemServiceInterface = require('../interfaces/ItemServiceInterface');

class GrandService extends itemServiceInterface
{

    async itemExists(id){
        try {
            const result = await grands.findOne({
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
            const result = await grands.findOne({
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
     * @param {Grand} grand 
     * @returns {Boolean} true
     */
    async updateOrCreate(grand) {
        try {
            const result = await grands.findOne(grand, {
                where:{
                    id: grand.id
                }
            });
            if(result) {
                await grands.update(grand, {
                    where: {
                        id: id
                    }
                });
            }
            else await grands.create(grand);
            return true;
        } catch (err) {
            return false;
        };
    }

     /**
     * @param {Grand[]} grandRange 
     * @returns {Boolean} true
     */
    async updateOrCreateRange(grandRange)
    {
        try {
            for(const grand of grandRange)
            {
                const result = await grands.findOne(grand, {
                    where:{
                        id: grand.id
                    }
                });
                if(result){
                    await grands.update(grand, {
                        where: {
                            id: id
                        }
                    });
                }
                else this.create(grand);
            }
            return true;
        } catch (err) {
            return false;
        }
    }

    /**
     * @returns {Grand[]} 
     */
    async getAllRecords(){
        try { 
            const result = await grands.findAll()
            return result
        }
        catch (err) { return null; }
    }

    /**
     * @param {Grand} grand
     * @returns {Boolean} true
     */
    async deleteItem(id) {
        try { 
            await grands.destroy({
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
module.exports = new GrandService();