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

// Star Wars Characters (DATA)
// =============================================================
//var members = [

// 	{
// 		routeName: "yoda",
// 		name: "Yoda",
// 		role: "Jedi Master",
// 		age: 900,
// 		forcePoints: 2000		
// 	},

// 	{
// 		routeName: "darthmaul",
// 		name: "Darth Maul",
// 		role: "Sith Lord",
// 		age: 200,
// 		forcePoints: 1200		
// 	},

// 	{
// 		routeName: "obiwankenobi",
// 		name: "Obi Wan Kenobi",
// 		role: "Jedi Master",
// 		age: 55,
// 		forcePoints: 1350
// 	}
// ]

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