var expect = require("chai").expect;

//var server = require('../src/server.js');
var request = require('supertest');

describe('API', function() {

	beforeEach(function () {
		server = require('../src/server.js');
	});

	afterEach(function () {
		server.close();
	});

	// Create
	it('/api/v1/url', function unitTests(done) {
		request(server)
		  .post('/api/v1/url/')
		  .send({"user_url": "http://www.apple.com/iphone/"})
		  .set('Accept', 'application/json')
		  .expect('Content-Type', /json/)
		  .expect(200, done);
	});

	// Read One
	it('/api/v1/url/:id', function unitTests(done) {
		var urlID = 60;
		request(server)
		  .get('/api/v1/url/' + urlID)
		  .set('Accept', 'application/json')
		  .expect('Content-Type', /json/)
		  .expect(200, {"id": 60, "user_url": "http://www.apple.com/iphone-7/", "shortened_url": "to1ejk", "createdAt": "2016-10-02T20:59:06.000Z", "updatedAt": "2016-10-02T20:59:06.000Z"}, done);
	});

	// Read All
	it('/api/v1/urls', function unitTests(done) {
		request(server)
		  .get('/api/v1/urls')
		  .set('Accept', 'application/json')
		  .expect('Content-Type', /json/)
		  .expect(200, done);
	});

	// Delete
	it('/api/v1/url/:id', function unitTests(done) {
		var urlID = 62;
		request(server)
		  .delete('/api/v1/url/' + urlID)
		  .set('Accept', 'application/json')
		  .expect('Content-Type', /json/)
		  .expect(200, done);
	});

	// Update
	it('/api/v1/url/:id', function unitTests(done) {
		var urlID = 63;
		request(server)
		  .post('/api/v1/url/' + urlID)
		  .send({"user_url": "http://www.apple.com/watch/"})
		  .set('Accept', 'application/json')
		  .expect('Content-Type', /json/)
		  .expect(200, done);
	});


	

});
