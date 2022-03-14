const Sequelize = require('sequelize');

module.exports = class Image extends Sequelize.Model {
  static init(sequelize) {
    return super.init({
      imageId: { // 이미지 번호
        type: Sequelize.STRING(255),
        unique: true,
      },
      subId: { // 게시글 번호
        type: Sequelize.STRING(500),
      },
      imageName: { // 사진 이름
        type: Sequelize.STRING(100),
      },
      vedeoName: { // 동영상 이름
        type: Sequelize.STRING(255),
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
    db.Image.belongsTo(db.Post, { foreignKey: { imageId: 'imageId', onDelete: 'SET Null', as: 'Post' } });
  }
};
