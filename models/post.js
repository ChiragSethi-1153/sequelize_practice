'use strict';
const {
  Model, UUIDV4
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Post extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ user}) {
      // define association here
      this.belongsTo(user, {foreignKey: 'userId'})
    }
    toJSON(){
      return {...this.get(), id: undefined}
    }
  }
  Post.init({
    uuid: {
      type: DataTypes.STRING,
      defaultValue: DataTypes.UUIDV4
    },
    body: DataTypes.STRING
  }, {
    sequelize,
    tableName:'posts',
    modelName: 'Post',
  });
  return Post;
};