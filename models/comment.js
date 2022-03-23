const Sequelize = require('sequelize');

module.exports = class Comment extends Sequelize.Model {
  static init(sequelize) {
    return super.init({
      postId: { // 게시글번호
        type: Sequelize.STRING(255),
      },
      userId: {
        type: Sequelize.STRING(255),
      },
      commentId: {
        type: Sequelize.STRING(50),
      },
      subject: {
        type: Sequelize.STRING(50),
        allowNull: false,
      },
      commentext: {
        type: Sequelize.STRING(50),
        allowNull: false,
      },
      createat: {
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
    db.Comment.belongsTo(db.Post, { foreignKey: 'postId', targetKey: 'postId' });
    db.Comment.belongsTo(db.Profile, { foreignKey: 'userId', targetKey: 'userId' });
  }
};
