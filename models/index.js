const User = require('./User');
const Post = require('./post');
const Reply = require('./reply');


User.hasMany(Post, {
    foreignKey: "user_id"
});
User.hasMany(Reply, {
    foreignKey: "user_id"
});
Post.belongsTo(User, {
    foreignKey: "user_id"

});
Reply.belongsTo(User, {
    foreignKey: "user_id"

})

module.exports = { User, Post, Reply };