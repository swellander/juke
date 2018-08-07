const db = require('./db');
const Sequelize = require('sequelize');

module.exports = db.define('album', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  artWorkUrl: {
    type: Sequelize.STRING,
    defaultValue: 'default-album.jpg'
  }
});

