module.exports = function (connection, Sequelize) {
    const User = connection.define(
        "User",
        {
            full_name: Sequelize.STRING,
            password: Sequelize.STRING,
            email: Sequelize.STRING,
            picture: Sequelize.STRING

        }
    );

    User.associate = function (models) {
        User.hasMany(models.Post, {
            onDelete: 'cascade'
        })
    };



    return User;
}
