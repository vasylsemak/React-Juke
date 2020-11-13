const db = require('./db');
const Album = require('./Album');
const Artist = require('./Artist');
const Song = require('./Song');

Artist.hasMany(Album);
Album.belongsTo(Artist);
Album.hasMany(Song);
Song.belongsTo(Album);
Artist.hasMany(Song);
Song.belongsTo(Artist);

module.exports = { db, Album, Artist, Song };
