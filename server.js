const express = require('express');
const app = express();

const PORT = process.env.PORT || 3001;
const db = require("./models");

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
  app.use(express.static('client/build'));
}

require('./routes/api-routes.js')(app);
require('./routes/html-routes.js')(app);

// Starts our server.
db.sequelize.sync().then(function () {
  app.listen(PORT, function () {
    console.log("Server listening on: http://localhost:" + PORT);
  });
});
