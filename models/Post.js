module.exports = function (connection, Sequelize) {
    const Post = connection.define(
        "Post",
        {
            title: Sequelize.STRING,
            body: Sequelize.STRING,
            picture: Sequelize.STRING,
        }
    );

    Post.associate = function (models) {
        Post.belongsTo(models.User, {
            foreignKey: {
                allowNull: false
            },
            onDelete: 'cascade'
        });
    }
    return Post;
}
