const sequelize = require('../../domain/db');

class EntityCrudService {
    constructor(entity) {
        if (entity instanceof Grand) entity = new Grand();
        if (entity instanceof Championship) entity = new Championship();
        if (entity instanceof ScienificManagement) entity = new ScienificManagement();
        if (entity instanceof Study) entity = new Study();
    }
    /**
     * @param {Grand} grand 
     * @returns {Boolean} true
     */
    async create(grand) {
        try {
            const result = await sequelize.models.grand.create(grand);
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
                const result = await sequelize.models.grand.findOne(grand, {
                    where:{
                        id: grand.id
                    }
                });
                if(result){
                    await sequelize.models.grand.update(grand, {
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
     * @param {Grand} grand
     * @returns {Boolean} true
     */
    async update(grand){
        try {
            await sequelize.models.grand.update(grand, {
                where: {
                    id: grand.id
                }
            });
            return true;
        } catch (err) {
            return false;
        }
    }

    /**
     * @returns {Grand[]} 
     */
    async getAllRecords(){
        try { await sequelize.models.grand.findAll()}
        catch (err) { return null; }
    }

    /**
     * @param {Grand} grand
     * @returns {Boolean} true
     */
    async delete(grand) {
        try { 
            await sequelize.models.grand.delete(grand, {
                where:{
                    id: grand.id
                }
            }); 
            return true; 
        } catch (err) { 
            return false; 
        }
    }
}

module.exports = new GrandService();