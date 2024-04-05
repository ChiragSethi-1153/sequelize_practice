'use strict';

const { DATE } = require('sequelize');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     * 
    */
    await queryInterface.bulkInsert('users', [{
       name: 'John Doe',
       email: 'john@mail.com',
       role: 'user',
       uuid: 'a469d2e8-d5c8-46a1-9cf1-84084ce00c49',
       createdAt: '2024-04-05T10:46:37.929Z',
        updatedAt: '2024-04-05T10:46:37.929Z'
     }], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('users', null, {})
  }
};
