module.exports = (express) => {
	const router = express.Router();

	

	router.get('/users', (req, res) => {
		res.json({
			healthy: true,
		})
	});

	return router;
}