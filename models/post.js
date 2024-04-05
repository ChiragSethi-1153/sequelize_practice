'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class post extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ user}) {
      // define association here
      this.belongsTo(user, {foreignKey: 'userId', as: 'user'})
    }
    toJSON(){
      return {...this.get(), id: undefined, userId: undefined}
    }
  }
  post.init({
    uuid: {
      type: DataTypes.STRING,
      defaultValue: DataTypes.UUIDV4
    },
    userId: {
      type: DataTypes.INTEGER
    },
    body: DataTypes.STRING
  }, {
    sequelize,
    tableName:'Posts',
    modelName: 'post',
  });
  return post;
};
