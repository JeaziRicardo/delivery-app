module.exports = (sequelize, DataTypes) => {
  const SaleProduct = sequelize.define(
    "PostCategory",
    {
      saleId: { type: DataTypes.INTEGER, foreignKey: true },
      productId: { type: DataTypes.INTEGER, foreignKey: true},
      quantity: { type: DataTypes.INTEGER },
    },
    { timestamps: false , underscored:true}
  );

  SaleProduct.associate = (models) => {
    models.Sale.belongsToMany(models.Products, {
      as: "sale",
      through: SaleProduct,
      foreignKey: "saleId",
      otherKey: "productId",
    });
    models.Products.belongsToMany(models.Sale, {
      as: "product",
      through: SaleProduct,
      foreignKey: "productId",
      otherKey: "saleId",
    });
  };

  return SaleProduct;
};
