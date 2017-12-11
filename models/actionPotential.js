module.exports = function(sequelize, DataTypes) {
  var actPotTables = sequelize.define("todos", {
    text: DataTypes.STRING,
    complete: DataTypes.BOOLEAN
  });
  return Todo;
};