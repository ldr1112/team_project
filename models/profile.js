const Sequelize = require('sequelize');

module.exports = class Profile extends Sequelize.Model {
  static init(sequelize) {
    return super.init({
      userId: {
        type: Sequelize.STRING(255),
        unique: true,
        allowNull: false,
      },
      password: {
        type: Sequelize.STRING(500),
        allowNull: false,
      },
      name: {
        type: Sequelize.STRING(100),
      },
      mobile: {
        type: Sequelize.STRING(255),
      },
      email: {
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
    db.Profile.hasMany(db.Post, { foreignKey: 'userId', sourceKey: 'userId' });
    db.Profile.hasMany(db.Comment, { foreignKey: 'userId ', sourceKey: 'userId' });
  }
};
