var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();
// this port will work on localhost and Heroku
var PORT = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({ extended: false }))
// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// To serve static files such as images, CSS files and JS
app.use(express.static('app'));

require('./app/routing/apiRoutes.js')(app);
require('./app/routing/htmlRoutes.js')(app);


app.listen(PORT, function() {
 console.log("App listening on PORT " + PORT);
});