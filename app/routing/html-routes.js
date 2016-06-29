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
