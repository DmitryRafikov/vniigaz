const sequelize = require('./models/domain/db');

class EventTypeService {

    /**
     * @param {EventType} eventType 
     * @returns {Boolean} true
     */
    async create(eventType) {
        try {
            const result = await sequelize.models.eventType.create(eventType);
            return true;
        } catch (err) {
            return false;
        };
    }

     /**
     * @param {EventType[]} eventTypeRange 
     * @returns {Boolean} true
     */
    async updateOrCreateRange(eventTypeRange)
    {
        try {
            for(const eventType of eventTypeRange)
            {
                const result = await sequelize.models.eventType.findOne(eventType, {
                    where:{
                        id: eventType.id
                    }
                });
                if(result){
                    await sequelize.models.eventType.update(eventType, {
                        where: {
                            id: id
                        }
                    });
                }
                else this.create(eventType);
            }
            return true;
        } catch (err) {
            return false;
        }
    }

    /**
     * @param {EventType} eventType
     * @returns {Boolean} true
     */
    async update(eventType){
        try {
            await sequelize.models.eventType.update(eventType, {
                where: {
                    id: eventType.id
                }
            });
            return true;
        } catch (err) {
            return false;
        }
    }

    /**
     * @returns {EventType[]} 
     */
    async getAllRecords(){
        try { await sequelize.models.eventType.findAll()}
        catch (err) { return null; }
    }

    /**
     * @param {EventType} eventType
     * @returns {Boolean} true
     */
    async delete(eventType) {
        try { 
            await sequelize.models.eventType.delete(eventType, {
                where:{
                    id: eventType.id
                }
            }); 
            return true; 
        } catch (err) { 
            return false; 
        }
    }
}

module.exports = new EventTypeService();