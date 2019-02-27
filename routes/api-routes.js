const db = require('../models/');

module.exports = function (app) {

  app.post('/api/session', function (req, res) {
    db.User.find(req.body)
    .then(function (data) {
      res.json(data);
    })
    .catch(function (err) {
      res.json(err);
    });
  });

  app.get('/api/users', function(req, res){
   db.User.findAll({}).then(function (data){
     console.log('anything');
    res.json(data);
   })
   .catch(function(err){
     console.log('err');
    res.json(err);
   });
  });

  app.get('/api/user/:id', function (req, res) {
    db.User.find({id: req.params.id})
    .then(function (data) {
      res.json(data);
    })
    .catch(function (err) {
      res.json(err);
    });
  });

  app.post('/api/user', function (req, res) {
    db.User.create(req.body)
    .then(function (data) {
      res.json(data);
    })
    .catch(function (err) {
      res.json(err);
    });
  });

/*

  app.post('/api/note', function (req, res) {
    const userId = req.body.userId;
    const newEntry = {
      body: req.body.body
    }

    Note.create(newEntry)
      .then(function (noteData) {
        return User.findOneAndUpdate({_id: userId}, { $push: { notes: noteData._id } }, { new: true });
    })
    .then(function(userData) {
      res.json(userData);
    })
    .catch(function (err) {
      res.json(err);
    });
  });

*/

}