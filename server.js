// Dependencies
const express = require('express');
const path = require('path');

// Sets up express for use
const app = express();

// Sets the port for the server to listen on
const PORT = 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/users', function(req, res) {
  res.sendFile(path.join(__dirname, './index.html'));
});

app.post('/api/users', function(req, res) {
 tableName.create(req.body).then(function(){
  res.json(data);
 });
  console.log(req.body);
  res.end();
});

// Starts our server.
app.listen(PORT, function() {
  console.log("Server listening on: http://localhost:" + PORT);
});
