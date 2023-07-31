const sequelize = require('../../domain/db');
//const OrganizationServiceInterface = require('../interfaces/OrganizationServiceInterface');

class OrganizationService {

    /**
     * @param {int} $id
     * @returns {bool}
     */
    async organizationExist(id) {
        try {
            const organization = await sequelize.models.organization.findOne({
                where: {
                    id: id
                }
            });
            if (organization) 
            {
                return true;
            }
        } catch (error) {
            return false;
        }
    }

    /**
     * @param {organization} $organization
     * @returns {bool}
     */
    async createOrganization(organization) {
        try {
            await sequelize.models.organization.create(organization);
            return true;
        } catch (error) {
            return false;
        }
    }

    /**
     * @param {int} $id
     * @returns {organization}
     */
    async getOrganization(id) {
        try {
            const organization = await sequelize.models.organization.findOne({
                where: {
                    id: id
                }
            });
            return organization;
        } catch (error) {
            return null;
        }
    }
    /**
     * @param {string} $login
     * @returns {organization}
     */
    async getOrganizationByLogin(login) {
        try {
            const organization = await sequelize.models.organization.findOne({
                where: {
                    login: login
                }
            });
            return organization;
        } catch (error) {
            return null;
        }
    }

    /**
     * @param {int} $id
     * @param {organization} $organization
     * @returns {bool}
     */
    async updateOrganization(id, organization) {
        try {
            await sequelize.models.organization.update(organization, {
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
    async deleteOrganization(id) {
        try {
            await sequelize.models.organization.destroy({
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

module.exports = new OrganizationService();