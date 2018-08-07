const db = require('./db');
const Sequelize = require('sequelize');

module.exports = db.define('song', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  audioUrl: Sequelize.STRING,
  genre: Sequelize.STRING
})
