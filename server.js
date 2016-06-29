// Dependencies
// =============================================================
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3000;

// Sets up the Express app to handle data parsing 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));

//New Members Data
// =============================================================
var newMembers = [

	{
		name: "Danielle",
		location:"Orlando",
		age: "34",
		photoLink: "",
		score: "",		
	},

]

// Routes
// =============================================================

// Basic route that sends the user first to the AJAX Page
app.get('/', function(req, res){
	//loads the main html page
	res.sendFile(path.join(__dirname + '/app/public/home.html'));
})

app.get('/survey', function(req, res){
	//loads the survey page
	res.sendFile(path.join(__dirname + '/app/public/survey.html'));
})



// Create member - takes in JSON input
app.post('/api/new', function(req, res){

	var newmember = req.body;
	newmember.routeName = newcharacter.name.replace(/\s+/g, '').toLowerCase()

	console.log(newmember);

	characters.push(newmember);

	res.json(newmember);
})

// Starts the server to begin listening 
// =============================================================
app.listen(PORT, function(){
	console.log('App listening on PORT ' + PORT);
})