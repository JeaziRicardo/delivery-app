import React, { useEffect, useState } from 'react';
import CardItem from '../components/cardItem';
import Navbar from '../components/navbar';
import { getProducts } from '../helpers/api';

export default function CustomerProducts() {
  const [productData, setProductData] = useState([]);
  useEffect(() => {
    const axiosApi = async () => {
      const response = await getProducts();
      setProductData(response.data);
    };
    axiosApi();
  }, []);

  return (
    <div>
      <Navbar />
      {productData
        .map(({ name, price, urlImage }, index) => (
          <CardItem
            key={ index }
            nome={ name }
            preco={ price }
            image={ urlImage }
            index={ index + 1 }
          />
        ))}
    </div>
  );
}
