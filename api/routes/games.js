const {
  index,
  show,
  update,
  create,
  destroy
} = require('../controllers/games');

module.exports = router => {
  // localhost:4000/games
 router.get('/games', index);
  // localhost:4000/games/12345
  router.get('/games/:id', show);
  // localhost:4000/games
  router.post('/games', create);

  // localhost:4000/games/update
  router.get('/games/update', update);
  // localhost:4000/games/destroy
  router.post('/games/destroy', destroy);
};