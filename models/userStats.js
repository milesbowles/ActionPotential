module.exports = function(sequelize, DataTypes) {
    var Stats = sequelize.define("Stats", {
      gamesWon: {
        type: DataTypes.INTEGER,
        defaultValue: 0
      },
      gamesPlayed: {
        type: DataTypes.INTEGER,
        defaultValue: 0
      },
      highScoreMultiplayer: {
        type: DataTypes.INTEGER
      },
      highScoreSinglePlayer: {
        type: DataTypes.INTEGER,
        defaultValue: 0
      },
      categoryMultiplayer: {
        type: DataTypes.STRING
      },
      categorySinglePlayer: {
          type: DataTypes.STRING
      }
    });
    Stats.associate = function(models){
      foreignKey: {
        allowNull: false
      }
    }
    return Stats;
  };