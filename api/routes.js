module.exports = router => {
  require('./routes/games')(router);

  return router;
};