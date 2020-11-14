const router = require('express').Router();
const { Album, Artist, Song } = require('../db/index.js');

router.get('/', async (req, res, next) => {
  try {
    const albums = await Album.findAll({ include: [{ model: Artist }] });

    if(albums.length === 0) res.sendStatus(500);
    else res.status(200).json(albums);
  } catch (error) {
    next(error)
  }
});

router.get('/:albumId', async (req, res, next) => {
  try {
    const album = await Album.findOne({
      where: { id: req.params.albumId },
      include: [{ model: Artist }, { model: Song }]
    });

    if(!album.id) res.sendStatus(500);
    else res.status(200).json(album);
  } catch (error) {
    next(error)
  }
});

module.exports = router;
