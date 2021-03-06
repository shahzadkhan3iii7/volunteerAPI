'use strict';
module.exports = function(sequelize, DataTypes) {
  var Skills = sequelize.define('Skills', {
    skill: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        Skills.belongsTo(models.User);
      }
    }
  });
  return Skills;
};
