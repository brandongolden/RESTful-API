const express = require('express');

const bodyParser = require('body-parser');

const app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true,
}));

// Config
const port = 3000;


app.use('/', require('./routes')(express));

// app.use('/api/v1', require('../routes/api.js')(express));
// app.use(express.static('public'));


exports.server = app.listen(port, () => {
  // console.log('Server Active On', port);
});

/*
var server = app.listen(port, function() {
  console.log('Server Active on', port);
});
*/

// module.exports = server;
