const Products = (sequelize, DataTypes) => {
  const Product = sequelize.define('Product', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING, unique: true },
    price: DataTypes.INTEGER,
    urlImage: DataTypes.STRING,
  },
    {
      timestamps: false,
      underscored: true,
    });

  return Products;
};

module.exports = Products;