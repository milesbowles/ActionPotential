module.exports = function(sequelize, DataTypes) {
  var user = sequelize.define("UserAuthentication", {
    username: {
      type: DataTypes.STRING,
    },
    password: {
      type: DataTypes.STRING
    },
    loggedIn: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  });
  return user;
};