const Sale = (sequelize, DataTypes) => {
  const Sale = sequelize.define(
    "Sales",
    {
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      userId: { type: DataTypes.INTEGER, foreignKey: true },
      sellerId: { type: DataTypes.INTEGER, foreignKey: true },
      totalPrice: DataTypes.DECIMAL,
      password: DataTypes.STRING,
      deliveryAddress: DataTypes.STRING,
      deliveryNumber: DataTypes.STRING,
      saleDate: DataTypes.DATE,
      status: DataTypes.STRING,
    },
    {
      timestamps: false,
      underscored: true,
    }
  );
  Sale.associate = (models) => {
    Sale.belongsTo(models.User, { foreignKey: "userId", as: "user" });
    Sale.belongsTo(models.User, { foreignKey: "sellerId", as: "seller" });
  };

  return Sale;
};

module.exports = Sale;
