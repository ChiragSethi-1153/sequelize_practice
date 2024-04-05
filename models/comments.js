'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class comments extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({post}) {
      // define association here
      this.belongsTo(post, {foreignKey: 'postId', as: 'post'})
    }
  }
  comments.init({
    postId: {
      type: DataTypes.STRING
    },
    body: DataTypes.STRING
  }, {
    sequelize,
    tableName: 'comments',
    modelName: 'comments',
  });
  return comments;
};