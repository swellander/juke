const db = require('./db');
const Sequelize = require('sequelize');

module.exports = db.define('artist', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  }
});
