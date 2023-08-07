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
    async updateOrCreate(item) {}

    /**
     * @param {item[]} $item
     * @returns {bool}
     */
    async updateOrCreateRange(itemRange) {}

    /**
     * @param {int} $id
     * @returns {item}
     */
    async getItemById(id) {}
    
    /**
     * @param {int} $id
     * @returns {bool}
     */
    async deleteItem(id) {}

    /**
     * @returns {item[]}
     */
    async getAllRecords(){};
}
module.exports = ItemServiceInterface;