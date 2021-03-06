// Include express module
var express = require('express');

// create controller object
var tasksController = require('../controllers/tasks.js');

// create node express object
var app = express();

// Task 1
app.get("/I/want/title/", tasksController.getTitles);
// Task 2
app.get("/I/want/title/", tasksController.getTitlesAsync);
// Task 3
app.get("/I/want/title/", tasksController.getTitlesRSVP);

// empty url handling
app.get("*", function (request,response) {
	response.status(404).send('NO RESPONSE');
});

app.listen(8081);
