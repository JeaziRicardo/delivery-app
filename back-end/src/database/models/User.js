const User = (sequelize, DataTypes) => {
  const User = sequelize.define("User", {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: DataTypes.STRING,
    email: {type: DataTypes.STRING, unique: true},
    password: DataTypes.STRING,
    role: DataTypes.STRING,
  },
  {
    timestamps: false,
    underscored: true
  });
  User.associate = (models) => {
    User.hasMany(models.Sale,
      { foreignKey: 'id' });
      
  };
  return User;
};

module.exports = User;