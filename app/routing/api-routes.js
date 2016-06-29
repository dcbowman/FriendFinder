
var newMembers 	= require('../data/friends.js');
var path = require('path');


module.exports = function(app){

//loads page of API data where all of the members are listed
	app.get('/api/survey', function(req, res){
		res.json(newMembers);
	});


// Create member - takes in JSON input and adds it to the api
app.post('/api/survey', function(req, res){

	var newMembers = req.body;

	console.log(newMembers);

	characters.push(newMembers);

	res.json(newMembers);
})
}