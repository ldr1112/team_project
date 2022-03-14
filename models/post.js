const Sequelize = require('sequelize');

module.exports = class Post extends Sequelize.Model {
  static init(sequelize) {
    return super.init({
      // subId: { // 게시글번호
      //   type: Sequelize.STRING(255),
      //   unique: true,
      // },
      boardName: { // 게시판 이름
        type: Sequelize.STRING(255),
      },
      post: { // 게시판
        type: Sequelize.STRING(500),
        allowNull: false,
      },
      subject: { // 글 제목
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      userId: { // 글쓴이
        type: Sequelize.STRING(255),
        allowNull: false,
      },
      text: { // 내용
        type: Sequelize.STRING(255),
        allowNull: false,
      },
      comment: { // 댓글
        type: Sequelize.STRING(255),
      },
      imageId: { // 이미지
        type: Sequelize.STRING(255),
      },
      updatedPwDate: {
        type: Sequelize.DATE,
      },

    }, {
      sequelize,
      // tableName: 'tableName', // table명을 수동으로 생성 함
      // freezeTableName: true, // true: table명의 복수형 변환을 막음
      underscored: true, // true: underscored, false: camelCase
      timestamps: true, // createAt, updatedAt
      paranoid: true, // deletedAt
    });
  }

  static associate(db) {
    db.Post.belongsTo(db.Profile, { foreignKey: { userId: 'userId', onDelete: 'SET NULL', as: 'Profile' } });
    db.Post.belongsTo(db.Board, { foreignKey: { boardName: 'boardName', onDelete: 'SET Null', as: 'Board' } });
    db.Post.hasMany(db.Image, { foreignKey: { imageId: 'imageId', onDelete: 'SET Null', as: 'Image' } });
    db.Post.hasMany(db.Comment, { foreignKey: { subject: 'subject' }, onDelete: 'SET NULL', as: 'Comment' });
  }
};
