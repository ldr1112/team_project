// const { profile } = require('../lib/logger');
const { sequelize } = require('./connection');
const Profile = require('./profile');
const Post = require('./post');
const Board = require('./board');
const Comment = require('./comment');
const Image = require('./image');
const Vision = require('./vision');

const db = {};

db.sequelize = sequelize;

// model 생성
db.Profile = Profile;
db.Post = Post;
db.Board = Board;
db.Comment = Comment;
db.Image = Image;
db.Vision = Vision;

// model init
Profile.init(sequelize);
Post.init(sequelize);
Board.init(sequelize);
Comment.init(sequelize);
Image.init(sequelize);
Vision.init(sequelize);

// 관계생성
Profile.associate(db);
Post.associate(db);
Comment.associate(db);
Board.associate(db);
Image.associate(db);

module.exports = db;
