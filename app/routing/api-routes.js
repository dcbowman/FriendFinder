
var memberData 	= require('../data/friends.js');
var path = require('path');


module.exports = function(app){

//loads page where all of the members are listed
	app.get('/api/member', function(req, res){
		res.json(memberData);
	});


// Create member - takes in JSON input and adds it to the api
app.post('/api/new', function(req, res){

	var newmember = req.body;
	newmember.routeName = newcharacter.name.replace(/\s+/g, '').toLowerCase()

	console.log(newmember);

	characters.push(newmember);

	res.json(newmember);
})
}