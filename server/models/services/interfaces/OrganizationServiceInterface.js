let organization = require('../../domain/enitites/organization');

class OrganizationServiceInterface{
    constructor(){}
    /**
     * @param {int} $id
     * @returns {bool}
     */
    async organizationExist(id) {}

    /**
     * @param {organization} $organization
     * @returns {bool}
     */
    async createOrganization(organization) {}

    /**
     * @param {int} $id
     * @returns {organization}
     */
    async getOrganization(id) {}

    /**
     * 
     * @param {string} login 
     * @returns {organization}
     */
    async getOrganizationByLogin(login) {}

    /**
     * @param {int} $id
     * @param {organization} $organization
     * @returns {bool}
     */
    async updateOrganization(id, organization) {}
    
    /**
     * @param {int} $id
     * @returns {bool}
     */
    async deleteOrganization(id) {}
}
module.exports = new OrganizationServiceInterface();