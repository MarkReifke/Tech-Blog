const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Reply extends Model {}

Reply.init(
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
        reply:{
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
      timestamps: false,
      freezeTableName: true,
      modelName: "reply",
    }
)

module.exports = Reply;
