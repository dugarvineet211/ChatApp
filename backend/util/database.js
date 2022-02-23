const Sequelize = require('sequelize');

const sequelize = new Sequelize('chat-app', 'root', '22nachoS!', {
  dialect: 'mysql',
  host: 'localhost'
});

module.exports = sequelize;