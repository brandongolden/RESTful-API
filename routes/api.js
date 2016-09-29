module.exports = function(express) {
	var router = express.Router();

	router.get('/', function(req, res) {
		res.json({hello: "world"});
	});

	router.get('/status', function(req, res) {
		res.json({healthy: true});
	});

	router.get('/user/:id', function(req, res) {
		res.json({user: { id: req.params.id }});
	});


	router.get('/url/:url(*)', function(req, res) {


		function randomString(input)
		{
		    var random_string = "";
		    
		    var charset = "abcdefghijklmnopqrstuvwxyz0123456789";
		    
		    for( var i=0; i < input; i++ )
		        random_string += charset.charAt(Math.floor(Math.random() * charset.length));
		    
		    return random_string;
		}


		var shortened_url = "http://localhost:3000/" + randomString(6);
		res.json({url: { user_url: req.params.url, shortened_url: shortened_url }});
	});

	return router;
}
