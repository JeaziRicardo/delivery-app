import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import CardOrder from '../components/cardOrder';
import Navbar from '../components/navbar';
import { getOrders } from '../helpers/api';
import { getItem } from '../helpers/localStorage.helper';

export default function Orders() {
  const [orderList, setOrderList] = useState([]);
  useEffect(() => {
    const axiosApi = async () => {
      const response = await getOrders();
      console.log(response.data);
      setOrderList(response.data);
    };
    axiosApi();
  }, []);

  const { name: userLoggedName } = getItem();

  return (
    <div>
      <Navbar name={ userLoggedName } />
      {orderList.length > 0 && orderList.map(({
        id,
        status,
        saleDate,
        totalPrice,
      }, index) => (
        <Link key={ index } to={ `/customer/orders/${index + 1}` }>
          <CardOrder
            orderId={ id }
            status={ status }
            date={ saleDate }
            total={ totalPrice }
          />
        </Link>
      ))}
    </div>
  );
}