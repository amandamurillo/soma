'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.bulkInsert('Users', [{
        name: 'John Doe',
        email: "john@doe.com",
        password: "chicken",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Jane Doe',
        email: "jane@doe.com",
        password: "chicken",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Jim Doe',
        email: "jim@doe.com",
        password: "chicken",
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
    
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
