'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Reviews', [{
        title: 'I love Lil Funktown!',
        body: "She's my favorite!!!",
        category: "Fan",
        createdAt: new Date(),
        updatedAt: new Date(),
        UserId: 2,
        ArtistId: 1
      },
      {
        title: 'It was amazing!',
        body: "recommend!",
        category: "Fan",
        createdAt: new Date(),
        updatedAt: new Date(),
        UserId: 1,
        ArtistId: 1
      },
      {
        title: 'He aight...',
        body: "Too smoky",
        category: "Fan",
        createdAt: new Date(),
        updatedAt: new Date(),
        UserId: 3,
        ArtistId: 3
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
