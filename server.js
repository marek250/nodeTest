//include express to our prject
var express = require('express');

// create our application with express
var app = express();

var port = 3000;

var router = express.Router();

router.get('/', function (req, res) {
	res.json({
		'message': 'THIS IS MY SECOND ENDPOINT'
	});
});

app.use('/api', router);

app.listen(port);

console.log('App initialized');
