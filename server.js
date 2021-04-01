var express = require('express');
const _ = require('lodash');
var bodyParser = require('body-parser');
const expressOasGenerator = require('express-oas-generator');
const swaggerUi = require('swagger-ui-express')
var swaggerSettings = require('./swagger')
var Note = require('./app/models/note.model.js');

// create express app
var app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// parse application/json
app.use(bodyParser.json())

// Configuring the database
var dbConfig = require('./config/database.config.js');
var mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose.connect(dbConfig.url, {
    useMongoClient: true
});

mongoose.connection.on('error', function() {
    console.log('Could not connect to the database. Exiting now...');
    process.exit();
});
mongoose.connection.once('open', function() {
    console.log("Successfully connected to the database");
})


app.use('/api', swaggerUi.serve, swaggerUi.setup(swaggerSettings.swaggerDocument))

require('./app/routes/note.routes.js')(app);

// listen for requests
app.listen(3000, function() {
    console.log("Server is listening on port 3000");
});