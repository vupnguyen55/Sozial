module.exports = function(connection, Sequelize){
 const User = connection.define(
  "User",
  {
   full_name: Sequelize.STRING,
   password: Sequelize.STRING,
   email: Sequelize.INTEGER,
   picture: Sequelize.INTEGER,

  }
 );
 return User;
}
