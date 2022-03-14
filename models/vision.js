const Sequelize = require('sequelize');

module.exports = class Vision extends Sequelize.Model {
  static init(sequelize) {
    return super.init({
      visionId: { // 댓글 번호
        type: Sequelize.STRING(255),
        unique: true,
      },
      subId: { // 게시글 번호
        type: Sequelize.STRING(500),
      },
      visionName: { // 사진 이름
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
};
