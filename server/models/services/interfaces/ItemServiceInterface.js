let item = require('../../domain/enitites/item');

class ItemServiceInterface{
    constructor(){}
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
     * @param {int} $id
     * @param {item} $item
     * @returns {bool}
     */
    async updateItem(id, item) {}
    
    /**
     * @param {int} $id
     * @returns {bool}
     */
    async deleteItem(id) {}
}
module.exports = new ItemServiceInterface();