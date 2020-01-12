// *****************************************************************************
// Server.js - This file is the initial starting point for the Node/Express server.
// *** Dependencies
// =================================================
var express = require("express");
var cors = require("cors");
var db = require ("./models");
var rooms = require ("./routes/rooms");
var patients = require ("./routes/patients");
var orgUsers = require ("./routes/orgUsers");
var organizations = require ("./routes/organizations");
var notes = require ("./routes/notes");

// Sets up the Express App
// ================================================
var app = express();
var PORT = process.env.PORT || 3010;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// app.use(function(req, res, next) {
// 	res.header("Access-Control-Allow-Origin", "*");
// 	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
// 	res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
// 	next();
//   });
app.use(cors());

// Static directory
app.use(express.static(__dirname + "client/build"));

// Routes // ========================================================
app.use('/api/room/', rooms);
app.use('/api/patient/', patients);
app.use('/api/orgUser/', orgUsers);
app.use('/api/organization/', organizations);
app.use('/api/notes/', notes);

// Sync database with Sequelize models
db.sequelize.sync().then(function() {
	app.listen(PORT, function() {
		console.log("App listening on PORT " + PORT);
	})
}).catch(function(err) {
	console.error(err, "Something went wrong, database is not connected!");
});