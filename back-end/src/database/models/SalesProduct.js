const SalesProduct = (sequelize, DataTypes) => {
  const SalesProduct = sequelize.define(
    "SalesProduct", {
      saleId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        foreignKey: true,
      },
      productId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        foreignKey: true,
      },
      quantity: {
        type: DataTypes.INTEGER
      },
    },
    { timestamps: false, underscored: true }
  );

  SalesProduct.associate = (models) => {
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