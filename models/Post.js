module.exports = function(connection, Sequelize){
 const Post = connection.define(
  "Post",
  {
   title: Sequelize.STRING,
   body: Sequelize.STRING,
   picture: Sequelize.STRING,
  }
 );
 return Post;
}
