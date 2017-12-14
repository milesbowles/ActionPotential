module.exports = function(sequelize, DataTypes) {
    var globalData = sequelize.define("UserAuthentication", {
      id: {
        type: DataTypes.INTEGER
      },
      username: {
        type: DataTypes.STRING,
      },
      totalScore: {
        type: DataTypes.INTEGER
      },
      gamesWon: {
        type: DataTypes.INTEGER
      }
    });
    return globalData;
  };