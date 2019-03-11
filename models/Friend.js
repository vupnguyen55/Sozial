module.exports = function (connection, Sequelize) {
    const Friend = connection.define(
        "Friend",
        {
            user_id: Sequelize.INTEGER,
            friend_id: Sequelize.INTEGER
    
        }
    );

    
   
    return Friend;
}
