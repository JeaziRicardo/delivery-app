const Sales = (sequelize, DataTypes) => {
  const Sales = sequelize.define(
    "Sale",
    {
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      userId: { type: DataTypes.INTEGER, foreignKey: true },
      sellerId: { type: DataTypes.INTEGER, foreignKey: true },
      totalPrice: DataTypes.DECIMAL,
      deliveryAddress: DataTypes.STRING,
      deliveryNumber: DataTypes.STRING,
      saleDate: { 
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
      },
      status: DataTypes.STRING,
    },
    {
      timestamps: false,
      underscored: true,
    }
  );
  Sales.associate = (models) => {
    Sales.belongsTo(models.User, { foreignKey: "userId", as: "users" });
    Sales.belongsTo(models.User, { foreignKey: "sellerId", as: "seller" });
  };

  return Sales;
};

module.exports = Sales;
