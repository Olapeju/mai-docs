'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (sequelize, DataTypes) {
  var Document = sequelize.define('Document', {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    viewAccess: {
      type: DataTypes.ENUM('Public', 'Private', 'Role'),
      defaultValue: 'Public'
    },
    ownerId: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    classMethods: {
      associate: function associate(models) {
        // associations can be defined here
        Document.belongsTo(models.User, {
          foreignKey: 'ownerId'
        });
      }
    }
  });
  return Document;
};