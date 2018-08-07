const db = require('./db')
const Album = require('./Album');
const Artist = require('./Artist');
const Song = require('./Song');
// require each of your models here...

// ...and give them some nice associations here!
Song.belongsTo(Album);
Album.hasMany(Song);
Song.belongsTo(Artist);
Artist.hasMany(Song);
Album.belongsTo(Artist);
Artist.hasMany(Album);

module.exports = {
  db,
  Album,
  Artist,
  Song
  // Include your models in your module.exports as well!
  // The seed file expects to find them there!
}
