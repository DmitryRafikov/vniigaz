class ItemServiceInterface{
    /**
     * @param {int} $id
     * @returns {bool}
     */
    async itemExist(id) {}

    /**
     * @param {item} $item
     * @returns {bool}
     */
    async createItem(item) {}

    /**
     * @param {int} $id
     * @returns {item}
     */
    async getItem(id) {}

    /**
     * 
     * @param {string} login 
     * @returns {item}
     */
    async getItemByLogin(login) {}

    /**
     * @param {item} $item
     * @returns {bool}
     */
    async updateItem(item) {}
    
    /**
     * @param {int} $id
     * @returns {bool}
     */
    async deleteItem(id) {}

    async getAllRecords(){};
}
module.exports = ItemServiceInterface;