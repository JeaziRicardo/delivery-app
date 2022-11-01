const Products = (sequelize, DataTypes) => {
  const Products = sequelize.define('Product', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING, unique: true },
    price: DataTypes.DECIMAL(5,2),
    urlImage: DataTypes.STRING,
  },
    {
      timestamps: false,
      underscored: true,
    });

  return Products;
};

module.exports = Products;