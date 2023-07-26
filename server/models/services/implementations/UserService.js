const sequelize = require('./models/domain/db');

class UserService extends UserServiceInterface {
    /**
     * @param {int} $id
     * @returns {bool}
     */
    async userExist(id) {
        try {
            const user = await sequelize.models.user.findOne({
                where: {
                    id: id
                }
            });
            if (user) 
            {
                return true;
            }
        } catch (error) {
            return false;
        }
    }

    /**
     * @param {user} $user
     * @returns {bool}
     */
    async createUser(user) {
        try {
            await sequelize.models.user.create(user);
            return true;
        } catch (error) {
            return false;
        }
    }

    /**
     * @param {int} $id
     * @returns {user}
     */
    async getUser(id) {
        try {
            const user = await sequelize.models.user.findOne({
                where: {
                    id: id
                }
            });
            return user;
        } catch (error) {
            return null;
        }
    }
    /**
     * @param {string} $login
     * @returns {user}
     */
    async getUserByLogin(login) {
        try {
            const user = await sequelize.models.user.findOne({
                where: {
                    login: login
                }
            });
            return user;
        } catch (error) {
            return null;
        }
    }

    /**
     * @param {int} $id
     * @param {user} $user
     * @returns {bool}
     */
    async updateUser(id, user) {
        try {
            await sequelize.models.user.update(user, {
                where: {
                    id: id
                }
            });
            return true;
        } catch (error) {
            return false;
        }
    }

    /**
     * @param {string} $id
     * @returns {bool}
     */
    async deleteUser(id) {
        try {
            await sequelize.models.user.destroy({
                where: {
                    id: id
                }
            });
            return true;
        } catch (error) {
            return false;
        }
    }
}

module.exports = new UserService();