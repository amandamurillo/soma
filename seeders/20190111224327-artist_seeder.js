'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    
      return queryInterface.bulkInsert('Artists', [{
        artist_name: 'Lil FunkTown',
        genre: "Country",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        artist_name: 'Lil Medicine Cabinet',
        genre: "trap Soul",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        artist_name: 'Lil Smokehouse',
        genre: "EDM",
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
