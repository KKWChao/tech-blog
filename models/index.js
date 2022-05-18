const User = require("./User");
const Post = require("./Post");
const Comment = require("./Comment");

// User Model

// // Post Model
// Post.belongsTo(User, {
//   foreignKey: "user_id",
// });
// User.hasMany(Post, {
//   foreignKey: "user_id",
// });

// // Comment Model
// User.belongsTo(Comment, {
//   foreignKey: "user_id",
// });

/* NEED TO FINISH COMMENT */

module.exports = { User, Post, Comment };
