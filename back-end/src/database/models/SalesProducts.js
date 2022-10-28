const SalesProduct = (sequelize, DataTypes) => {
  const SaleProduct = sequelize.define(
    "SalesProduct",
    {
      saleId: { type: DataTypes.INTEGER, foreignKey: true },
      productId: { type: DataTypes.INTEGER, foreignKey: true },
      quantity: { type: DataTypes.INTEGER },
    },
    { timestamps: false, underscored: true }
  );

  SaleProduct.associate = (models) => {
    models.Sale.belongsToMany(models.Product, {
      as: "sales",
      through: SalesProduct,
      foreignKey: "saleId",
      otherKey: "productId",
    });
    models.Product.belongsToMany(models.Sale, {
      as: "products",
      through: SalesProduct,
      foreignKey: "productId",
      otherKey: "saleId",
    });
  };

  return SalesProduct;
};

module.exports = SalesProduct;