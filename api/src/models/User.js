const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  sequelize.define('user', {
    email:{
      type:DataTypes.STRING(60),
      allowNull:false,
      unique:true,
      validate:{
        isEmail:true
      },
    },
    names: {
      type: DataTypes.STRING(40),
      allowNull: false,
    },
    lastNames:{
      type:DataTypes.STRING(40),
      allowNull:false
    },
    phone:{
      type:DataTypes.STRING(40),
      allowNull:false,
    },
    birthDate:{
      type:DataTypes.DATEONLY,
      allowNull:false,
    },
    deleted:{
      type:DataTypes.BOOLEAN,
      defaulValue:false,
    },
    enabled:{
      type:DataTypes.BOOLEAN,
      defaulValue:true,
    },
    isADmin:{
      type:DataTypes.BOOLEAN,
      defaulValue:false
    }
    

  });
};

