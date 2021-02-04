// Get friend data
var data = require("../data.json");

exports.addFriend = function(request, response){
	var formName = request.query.name;
	var formDescription = request.query.description;
	console.log(formName, formDescription);
	var text = '{ "name":'+formName+', "description": '+formDescription+', "imageURL": "http://upload.wikimedia.org/wikipedia/commons/e/ea/Vannevar_Bush_portrait.jpg" }';
	console.log(text)
};
