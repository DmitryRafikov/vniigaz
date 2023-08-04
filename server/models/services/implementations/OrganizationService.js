const sequelize = require('../../domain/db');
const organizations = require('../../domain/enitites/organization');
class OrganizationService{

    /**
     * @param {int} $id
     * @returns {bool}
     */
    async organizationExist(id) {
        try {
            const organization = await organizations.findOne({
                where: {
                    id
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
            await organizations.create(organization);
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
            const organization = await organizations.findOne({
                where: {
                    id
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
            const organization = await organizations.findOne({
                where: {
                    login
                }
            });
            return organization;
        } catch (error) {
            console.log(error);
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
            await organizations.update(organization, {
                where: {
                    id
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
            await organizations.destroy({
                where: {
                    id
                }
            });
            return true;
        } catch (error) {
            return false;
        }
    }
}

module.exports = new OrganizationService();