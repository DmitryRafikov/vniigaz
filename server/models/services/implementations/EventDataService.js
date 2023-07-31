const sequelize = require('../../domain/db');

class EventDataService {

    /**
     * @param {EventData} eventData 
     * @returns {Boolean} true
     */
    async create(eventData) {
        try {
            const result = await sequelize.models.eventData.create(eventData);
            return true;
        } catch (err) {
            return false;
        };
    }

     /**
     * @param {EventData[]} eventDataRange 
     * @returns {Boolean} true
     */
    async updateOrCreateRange(eventDataRange)
    {
        try {
            for(const eventData of eventDataRange)
            {
                const result = await sequelize.models.eventData.findOne(eventData, {
                    where:{
                        id: eventData.id
                    }
                });
                if(result){
                    await sequelize.models.eventData.update(eventData, {
                        where: {
                            id: id
                        }
                    });
                }
                else this.create(eventData);
            }
            return true;
        } catch (err) {
            return false;
        }
    }

    /**
     * @param {EventData} eventData
     * @returns {Boolean} true
     */
    async update(eventData){
        try {
            await sequelize.models.eventData.update(eventData, {
                where: {
                    id: eventData.id
                }
            });
            return true;
        } catch (err) {
            return false;
        }
    }

    /**
     * @returns {EventData[]} 
     */
    async getAllRecords(){
        try { await sequelize.models.eventData.findAll()}
        catch (err) { return null; }
    }

    /**
     * @param {EventData} eventData
     * @returns {Boolean} true
     */
    async delete(eventData) {
        try { 
            await sequelize.models.eventData.delete(eventData, {
                where:{
                    id: eventData.id
                }
            }); 
            return true; 
        } catch (err) { 
            return false; 
        }
    }
}

module.exports = new EventDataService();