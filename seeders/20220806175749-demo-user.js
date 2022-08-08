'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
    */
     return queryInterface.bulkInsert('Users', [{
      name: 'cnu',
      email: 'cnu.prince8@gmail.com',
      address:"Hyderabad",
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     */
     return queryInterface.bulkDelete('Users', null, {});
  }
};
