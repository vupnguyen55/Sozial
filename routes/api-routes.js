const db = require('../models');
const Op = db.Sequelize.Op;

module.exports = function (app) {
  // called by handleLoginButton
  app.post('/api/session', function (req, res) {
    db.User.findOne({
      where: {
        email: req.body.email,
        password: req.body.password
      }
    }).then(function (data) {
      // console.log('inside api',data.password);
      res.json(data);
    })
      .catch(function (err) {
        res.json(err);
      });
  });

  app.get('/api/users', function (req, res) {
    db.User.findAll({}).then(function (data) {
      // console.log('anything');
      res.json(data);
    }).catch(function (err) {
      // console.log('err');
      res.json(err);
    });
  });
  

  app.get('/api/user/:id', function (req, res) {
    db.User.findOne({
      where: { id: req.params.id }
    })
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
  // called by getPosts
  app.get('/api/posts', function (req, res) {
    db.Post.findAll({
      // order: ['updatedAt', 'DESC']
    })
      .then(function (data) {
        res.json(data);
      })
      .catch(function (err) {
        res.json(err);
      });
  });

  // called by handleSearchClick
  app.get('/api/search/:id', function (req, res) {
    let filter = req.params.id + '%';
    console.log(typeof filter, filter);
    db.User.findAll({
      where: {
        full_name: {
          [Op.like]: filter
        }
      }
    }).then(function (data) {
      console.log('inside api');
      res.json(data);
    })
      .catch(function (err) {
        res.json(err);
      });
  });

  // getting all friends posts for one user
  app.get('/api/allposts/:ids', function (req, res) {
    db.Post.findAll({
      where: {
        UserId: req.params.ids.split(",")
      },
      order: ['updatedAt', 'DESC'
      ]
    })
      .then(function (data) {
        res.json(data);
      })
      .catch(function (err) {
        res.json(err);
      });
  });
  // get all friend ids for one user
  app.get('/api/friendship/:id', function (req, res) {
    db.Friend.findAll({
      where: {
        user_id: req.params.id
      }
    })
      .then(function (data) {
        res.json(data);
      })
      .catch(function (err) {
        res.json(err);
      });
  });
  // get all user ids for one friend
  app.get('/api/friends/:id', function (req, res) {
    db.Friend.findAll({
      where: {
        friend_id: req.params.id
      }
    })
      .then(function (data) {
        res.json(data);
      })
      .catch(function (err) {
        res.json(err);
      });
  });

  // app.post('/api/posts', function (req, res) {
  //   db.Post.findAll({
  //     where: {
  //       userid: req.body.userid
  //     }
  //   })
  //     .then(function (data) {
  //       res.json(data);
  //     })
  //     .catch(function (err) {
  //       res.json(err);
  //     });
  // });

  // called by handlePostClick
  app.post('/api/post', function (req, res) {
    // console.log('api req body: ', req.body);
    db.Post.create(req.body)
      .then(function (data) {
        // console.log('inside api post, create successful:',data);
        res.json(data);
      })
      .catch(function (err) {
        res.json(err);
      });
  });
  // called by handleAddClick
  app.post('/api/friend', function (req, res) {
    console.log('req body',req.body);
    db.Friend.create(req.body)
      .then(function (data) {
        console.log('inside api post, create friend successful:',data);
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