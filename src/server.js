var express = require('express');
var body_parser = require('body-parser');
var app = express();


app.use(body_parser.json());
app.use(body_parser.urlencoded({
	extended: true,
}));

// Config
var port = 3000;


app.use('/', require('./routes')(express));

//app.use('/api/v1', require('../routes/api.js')(express));
//app.use(express.static('public'));

//exports.server
server = app.listen(port, () => {
	console.log('Server Active On', port);
});

/*
var server = app.listen(port, function() {
	console.log('Server Active on', port);
});
*/

module.exports = server;
