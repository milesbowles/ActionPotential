module.exports = function(sequelize, DataTypes) {
    var stats = sequelize.define("UserAuthentication", {
      id: {
        type: DataTypes.STRING,
      },
      gamesWon: {
        type: DataTypes.INTEGER,
      },
      gamesPlayed: {
        type: DataTypes.INTEGER
      },
      highScoreMulti: {
        type: DataTypes.INTEGER
      },
      highScoreSingle: {
        type: DataTypes.INTEGER
      },
      categoryMulti: {
        type: DataTypes.STRING
      },
      categorySingle: {
          type: DataTypes.STRING
      }
    });
    return stats;
  };