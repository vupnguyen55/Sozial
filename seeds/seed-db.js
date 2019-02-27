const db = require('../models');

// Syncing sequelize models 
db.sequelize.sync().then(function() {
  db.User.bulkCreate([{
    full_name: 'Dyson Purifer Heater',
    password: 'Home',
    email: 102.99,
    picture: 100
  },{
    full_name: 'Nest Cam Indoor Smart Security Camera',
    password: 'Home',
    email: 172.99,
    picture: 100
  },{
    full_name: 'Samsonite Carry-on Spinner',
    password: 'Home',
    email: 112.99,
    picture: 100
  },{
    full_name: 'Hamilton Beach Toaster',
    password: 'Home',
    email: 122.99,
    picture: 100
  },{
    full_name: 'CHANEL COCO WOMEN Parfum',
    password: 'Beauty',
    email: 145.00,
    picture: 100
  },{
    full_name: 'COACH For Men 3-Piece Set',
    password: 'Beauty',
    email: 142.99,
    picture: 100
  },{
    full_name: 'French Girl Rose Sea Soak - Calming Bath Salts',
    password: 'Beauty',
    email: 22.99,
    picture: 100
  },{
    full_name: 'philosophy Hope In Your Hands 4-Piece Set',
    password: 'Beauty',
    email: 28.00,
    picture: 100
  },{
    full_name: 'FAO Schwarz 30-Piece Motorized Train Set',
    password: 'Children',
    email: 82.99,
    picture: 100
  },{
    full_name: 'Alex Toys Artist Studio My Art Desk',
    password: 'Children',
    email: 310.00,
    picture: 100
  },{
    full_name: 'Janod Bikloon Balance Bike',
    password: 'Children',
    email: 159.00,
    picture: 100
  }]).then(function(){
    console.log('Data successfully added!');
    db.sequelize.close();
  }).catch(function(error) {
    console.log('Error', error)
  });
});