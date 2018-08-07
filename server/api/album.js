const router = require('express').Router();
const { Song, Album, Artist } = require('../db');

router.get('/', async (req, res, next) => {
  try {
    const albums = await Album.findAll({
      include: [Artist]
    });
  res.json(albums);
  } catch(err) {
    next(err);
  }
});


router.get('/:albumId', async (req, res, next) => {
  //TODO: research a way to use findById with an include statement
  try {
    const album = await Album.findOne({
      where: { id: req.params.albumId },
      include: [Artist, Song]
    });
    res.json(album);
  } catch(err) {
    next(err)
  }
})

module.exports = router;
