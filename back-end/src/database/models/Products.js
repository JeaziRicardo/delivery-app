const Product = (sequelize, DataTypes) => {
  const Product = sequelize.define('User', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING, unique: true },
    price: DataTypes.INTEGER,
    urlImage: DataTypes.STRING,
  },
  {
    timestamps: false,
    underscored: true,
  });

  return Product;
};

module.exports = Product;