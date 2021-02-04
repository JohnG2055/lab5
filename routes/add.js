// Get all of our friend data
var data = require('../data.json');

exports.addFriend = function(request, response){
    var formName = request.query.name;
    var formDescription = request.query.description;
    var newImg = "http://lorempixel.com/400/400/people"
    var newFriend = { "name": formName, "description": formDescription, "imageURL": newImg};
    data.friends.push(newFriend);
    console.log(data);
    response.render('index', data);
};