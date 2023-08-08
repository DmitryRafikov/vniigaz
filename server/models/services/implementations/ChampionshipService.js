const championships = require('../../domain/enitites/championship');
const ItemServiceInterface = require('../interfaces/ItemServiceInterface');

class ChampionshipService extends ItemServiceInterface{

    async itemExists(id){
        try {
            const result = await championships.findOne({
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
            const result = await championships.findOne({
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
     * @param {Championship} championship 
     * @returns {Boolean} true
     */
    async updateOrCreate(championship) {
        try {
            const result = await championships.findOne(championship, {
                where:{
                    id: championship.id
                }
            });
            if(result) {
                await championships.update(championship, {
                    where: {
                        id: id
                    }
                });
            }
            else await championships.create(championship);
            return true;
        } catch (err) {
            return false;
        };
    }

     /**
     * @param {Championship[]} championshipRange 
     * @returns {Boolean} true
     */
    async updateOrCreateRange(championshipRange)
    {
        try {
            for(const championship of championshipRange)
            {
                const result = await championships.findOne(championship, {
                    where:{
                        id: championship.id
                    }
                });
                if(result){
                    await championships.update(championship, {
                        where: {
                            id: id
                        }
                    });
                }
                else this.create(championship);
            }
            return true;
        } catch (err) {
            return false;
        }
    }

    /**
     * @returns {Championship[]} 
     */
    async getAllRecords(){
        try { 
            const result = await championships.findAll()
            return result
        }
        catch (err) { return null; }
    }

    /**
     * @param {Championship} championship
     * @returns {Boolean} true
     */
    async deleteItem(id) {
        try { 
            await championships.destroy({
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

module.exports = new ChampionshipService();