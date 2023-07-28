const sequelize = require('./models/domain/db');

class EventLevelService {

    /**
     * @param {EventLevel} eventLevel 
     * @returns {Boolean} true
     */
    async create(eventLevel) {
        try {
            const result = await sequelize.models.eventLevel.create(eventLevel);
            return true;
        } catch (err) {
            return false;
        };
    }

     /**
     * @param {EventLevel[]} eventLevelRange 
     * @returns {Boolean} true
     */
    async updateOrCreateRange(eventLevelRange)
    {
        try {
            for(const eventLevel of eventLevelRange)
            {
                const result = await sequelize.models.eventLevel.findOne(eventLevel, {
                    where:{
                        id: eventLevel.id
                    }
                });
                if(result){
                    await sequelize.models.eventLevel.update(eventLevel, {
                        where: {
                            id: id
                        }
                    });
                }
                else this.create(eventLevel);
            }
            return true;
        } catch (err) {
            return false;
        }
    }

    /**
     * @param {EventLevel} eventLevel
     * @returns {Boolean} true
     */
    async update(eventLevel){
        try {
            await sequelize.models.eventLevel.update(eventLevel, {
                where: {
                    id: eventLevel.id
                }
            });
            return true;
        } catch (err) {
            return false;
        }
    }

    /**
     * @returns {EventLevel[]} 
     */
    async getAllRecords(){
        try { await sequelize.models.eventLevel.findAll()}
        catch (err) { return null; }
    }

    /**
     * @param {EventLevel} eventLevel
     * @returns {Boolean} true
     */
    async delete(eventLevel) {
        try { 
            await sequelize.models.eventLevel.delete(eventLevel, {
                where:{
                    id: eventLevel.id
                }
            }); 
            return true; 
        } catch (err) { 
            return false; 
        }
    }
}

module.exports = new EventLevelService();