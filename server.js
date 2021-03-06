const express = require('express');

const PORT = process.env.PORT || 3001;

const app = express();

const db = require("./models");

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
  app.use(express.static('client/build'));
}

require('./routes/api-routes.js')(app);

if (process.env.NODE_ENV === "production") {
  app.get('*', function (req, res) {
    res.sendFile(__dirname + '/client/build/index.html');
  });
}

// Starts our server.
db.sequelize.sync().then(function () {
  app.listen(PORT, function () {
    console.log("Server listening on: http://localhost:" + PORT);
  });
});
