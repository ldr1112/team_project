const Sequelize = require('sequelize');

module.exports = class Board extends Sequelize.Model {
  static init(sequelize) {
    return super.init({
      boardId: {
        type: Sequelize.STRING(255),
        unique: true,
        allowNull: false,
      },
      boardName: {
        type: Sequelize.STRING(500),
        unique: true,
        allowNull: false,
      },
      postId: {
        type: Sequelize.STRING(100),
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
    db.Board.hasMany(db.Post, { foreignKey: { boardName: 'boardName' }, onDelete: 'SET NULL', as: 'Post' });
  }
};
