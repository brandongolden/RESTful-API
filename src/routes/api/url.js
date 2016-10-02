const url = require('../../models/url');

module.exports = (express) => {
	const router = express.Router();

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

		url.create(req.body, (err) => {
			res.status(500).json(err);
		}, (data) => {
			res.status(200).json(data);
		})
	});

	return router;
}