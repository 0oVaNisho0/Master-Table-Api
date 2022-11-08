module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    'User',
    {
      userNumber: {
        type: DataTypes.STRING,
        unique: true,
      },

      name: {
        type: DataTypes.STRING,
      },

      lastName: {
        type: DataTypes.STRING,
      },

      phoneNumber: {
        type: DataTypes.INTEGER,
      },

      email: {
        type: DataTypes.STRING,
        unique: true,
        validate: {
          isEmail: true,
        },
      },

      userDetail: {
        type: DataTypes.TEXT,
      },
    },
    {
      underscored: true,
    }
  );

  return User;
};
