/** @type {import('sequelize-cli').Migration} */
const bcryptjs = require('bcryptjs');

module.exports = {
  up: async (queryInterface) => {
    queryInterface.bulkInsert(
      'users',
      [
        {
          nome: 'teste user',
          email: 'teste@gmail.com',
          password_hash: await bcryptjs.hash('123456', 8),
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          nome: 'user',
          email: 'user2@gmail.com',
          password_hash: await bcryptjs.hash('67890', 8),
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          nome: 'user teste',
          email: 'test.user@gmail.com',
          password_hash: await bcryptjs.hash('654321', 8),
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {},
    );
  },

  down() { },
};
