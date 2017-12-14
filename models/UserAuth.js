module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
    username: {
      type: DataTypes.STRING,
      allowNull: false
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    loggedIn: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  });
  User.associate = function(models){
    User.hasMany(models.Stats, {
      onDelete: "cascade"
    });
  }
  return User;
};