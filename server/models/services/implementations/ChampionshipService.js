//const sequelize = require('../../domain/db');
const championships = require('../../domain/enitites/championship');
const ItemServiceInterface = require('../interfaces/ItemServiceInterface');

class ChampionshipService extends ItemServiceInterface{

    /**
     * @param {Championship} championship 
     * @returns {Boolean} true
     */
    async create(championship) {
        try {
            await championships.create(championship);
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
     * @param {Championship} championship
     * @returns {Boolean} true
     */
    async updateItem(championship){
        try {
            await championships.update(championship, {
                where: {
                    id: championship.id
                }
            });
            return true;
        } catch (err) {console.log(err);
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
    async delete(championship) {
        try { 
            await championships.delete(championship, {
                where:{
                    id: championship.id
                }
            }); 
            return true; 
        } catch (err) { 
            return false; 
        }
    }
}

module.exports = new ChampionshipService();