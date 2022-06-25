const { DataTypes } = require('sequelize')

module.exports = (sequelize) => {
  sequelize.define('coments', {
    rating: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        min: 1,
        max: 5
      }
    },
    coment: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  })
}