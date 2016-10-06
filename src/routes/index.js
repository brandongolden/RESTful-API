module.exports = (express) => {
  const router = express.Router();

  router.post('/status', (req, res) => {
    res.json({
      healthy: true,
    });
  });

  // Routes
  router.use('/api/v1/', require('./api/url')(express));

  return router;
};
