let user = require('../../domain/enitites/user');

class UserServiceInterface{
    /**
     * @param {int} $id
     * @returns {bool}
     */
    async userExist(id) {}

    /**
     * @param {user} $user
     * @returns {bool}
     */
    async createUser(user) {}

    /**
     * @param {int} $id
     * @returns {user}
     */
    async getUser(id) {}

    /**
     * 
     * @param {string} login 
     * @returns {user}
     */
    async getUserByLogin(login) {}

    /**
     * @param {int} $id
     * @param {user} $user
     * @returns {bool}
     */
    async updateUser(id, user) {}
    
    /**
     * @param {int} $id
     * @returns {bool}
     */
    async deleteUser(id) {}
}
module.exports = new UserServiceInterface();