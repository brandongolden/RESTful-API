const url = require('../../models/url');

module.exports = (express) => {
	const router = express.Router();


	// Redirect
	router.get('/go/:shortened_url', (req, res) => {
		//req.body.id = req.params.id;
		req.body.shortened_url = req.params.shortened_url;

		
		url.redirect(req.body, (err) => {
			res.status(500).json(err);
		}, (data) => {
			res.status(200).json(data);	
		})


		res.redirect("http://localhost:3000/");
	});


	// Read All
	router.get('/urls', (req, res) => {
		url.findAll( (err) => {
			res.status(500).json(err);
		}, (data) => {
			res.status(200).json(data);
		})
	});

	// Read One
	router.get('/url/:id', (req, res) => {
		req.body.id = req.params.id;
		url.find(req.body, (err) => {
			res.status(500).json(err);
		}, (data) => {
			res.status(200).json(data);
		})
	});

	// Delete
	router.delete('/url/:id', (req, res) => {
		req.body.id = req.params.id;
		url.destroy(req.body, (err) => {
			res.status(500).json(err);
		}, (data) => {
			res.status(200).json(data);
		})
	});

	// Update
	router.post('/url/:id', (req, res) => {
		req.body.id = req.params.id;
		url.update(req.body, (err) => {
			res.status(500).json(err);
		}, (data) => {
			res.status(200).json(data);
		})
	});

	// Create
	
	router.post('/url', (req, res) => {

		// Generate a random string for shortened URL
		// stringLength parameter is the length of the string output
		function randomString(stringLength)
		{
		    var random_string = "";
		    
		    // Characters that are allowed to be used in random string generator
		    var charset = "abcdefghijklmnopqrstuvwxyz0123456789";
		    
		    // Generate random string
		    for( var i=0; i < stringLength; i++ )
		        random_string += charset.charAt(Math.floor(Math.random() * charset.length));
		    
		    // Return the generated string
		    return random_string;
		}


		// Shortened URL
		var shortened_url = randomString(6);

		req.body.shortened_url = shortened_url;

		url.create(req.body, (err) => {
			res.status(500).json(err);
		}, (data) => {
				
			console.log(req.body.user_url);
			console.log(req.body.shortened_url);
			console.log(req.body);
			

			res.status(200).json(data);
		})
		
	});
	


	return router;
}