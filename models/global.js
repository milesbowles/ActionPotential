module.exports = function(sequelize, DataTypes) {
    var GlobalData = sequelize.define("GlobalData", {
      username: {
        type: DataTypes.STRING,
        allowNull: false
      },
      totalScore: {
        type: DataTypes.INTEGER,
        allowNull: false 
      },
      gamesWon: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
      }
    });
    return GlobalData;
  };