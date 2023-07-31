const sequelize = require('../../domain/db');

class ChampionshipService {

    /**
     * @param {Championship} championship 
     * @returns {Boolean} true
     */
    async create(championship) {
        try {
            const result = await sequelize.models.championship.create(championship);
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
                const result = await sequelize.models.championship.findOne(championship, {
                    where:{
                        id: championship.id
                    }
                });
                if(result){
                    await sequelize.models.championship.update(championship, {
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
    async update(championship){
        try {
            await sequelize.models.championship.update(championship, {
                where: {
                    id: championship.id
                }
            });
            return true;
        } catch (err) {
            return false;
        }
    }

    /**
     * @returns {Championship[]} 
     */
    async getAllRecords(){
        try { await sequelize.models.championship.findAll()}
        catch (err) { return null; }
    }

    /**
     * @param {Championship} championship
     * @returns {Boolean} true
     */
    async delete(championship) {
        try { 
            await sequelize.models.championship.delete(championship, {
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