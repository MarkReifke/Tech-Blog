const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Post extends Model {}

Post.init(
    {
        id:{
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        name:{
          type: DataTypes.STRING,
          allowNull: false,  
        },
        post:{
          type: DataTypes.STRING,
          allowNull: false, 
         },
         user_id: {
           type: DataTypes.INTEGER,
           foreignKey: true,
         }
    },
    {
      sequelize,
      timesatmps: false,
      freezeTableName: true,
      modelName: "post",
    }
)

module.exports = Post;
