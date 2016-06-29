
// Create member - takes in JSON input
app.post('/api/new', function(req, res){

	var newmember = req.body;
	newmember.routeName = newcharacter.name.replace(/\s+/g, '').toLowerCase()

	console.log(newmember);

	characters.push(newmember);

	res.json(newmember);
})