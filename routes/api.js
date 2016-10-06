module.exports = function(express) {
  const router = express.Router();

  router.get('/', function(req, res) {
    res.json({ hello: 'world' });
  });

  router.get('/status', function(req, res) {
    res.json({ healthy: true });
  });

  router.get('/user/:id', function(req, res) {
    res.json({ user: { id: req.params.id } });
  });


  router.get('/url/:url(*)', function(req, res) {
  // Generate a random string for shortened URL
  // stringLength parameter is the length of the string output
    function randomString(stringLength) {
    const randomstring = '';

// Characters that are allowed to be used in random string generator
      const charset = 'abcdefghijklmnopqrstuvwxyz0123456789';

// Generate random string
for( var i=0; i < stringLength; i++ ) {
randomstring += charset.charAt(Math.floor(Math.random() * charset.length));

// Return the generated string
return randomstring;
}


		// Shortened URL
		var shortened_url = "http://localhost:3000/" + randomString(6);

		// json output
		res.json({url: { user_url: req.params.url, shortened_url: shortened_url }});
  };

	return router;
}
