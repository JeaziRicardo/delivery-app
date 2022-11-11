import React, { useState, useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { getAllSellers, postSale } from '../helpers/api';
import { getItem } from '../helpers/localStorage.helper';
import { getTotalCart } from '../helpers/cart.helper';
import DeliveryContext from '../context/DeliveryContext';
import { addressValidation } from '../helpers/validation.helper';
import DeliveryDetails from '../style/DeliveryDetails';

export default function SaleForm() {
  const { cartListItens, setCartListItens } = useContext(DeliveryContext);
  const [sellers, setSellers] = useState([]);
  const [choosedSeller, setChoosedSeller] = useState(2);
  const [endereco, setEndereco] = useState('');
  const [numEndereco, setNumEndereco] = useState('');

  const history = useHistory();

  useEffect(() => {
    const axiosApi = async () => {
      const response = await getAllSellers();
      const filteredSellers = response.data.filter((user) => user.role === 'seller');
      setSellers(filteredSellers);
    };
    axiosApi();
  }, []);

  const sendPost = async () => {
    const saleObject = {
      totalPrice: Number(getTotalCart(cartListItens)).toFixed(2),
      deliveryAddress: endereco,
      deliveryNumber: numEndereco,
      status: 'Pendente',
      sellerId: choosedSeller,
      cartItems: cartListItens,
    };
    const { token } = getItem();
    const { data } = await postSale(saleObject, token);
    setCartListItens([]);
    history.push(`/customer/orders/${data.id}`, { from: 'checkout page' });
  };

  return (
    <DeliveryDetails>
      <form>
        <label htmlFor="seller">
          <span>P.Vendedora Responsável</span>
          <select
            name="seller"
            data-testid="customer_checkout__select-seller"
            onChange={ ({ target }) => {
              setChoosedSeller(target.value);
            } }
            defaultValue={ choosedSeller }
            onSelectCapture={ ({ target }) => setChoosedSeller(target.value) }
          >
            {
              sellers.map((seller, index) => (
                <option
                  key={ index }
                  value={ seller.id }
                >
                  {seller.name}
                </option>))
            }
          </select>
        </label>
        <label htmlFor="address">
          Endereço
          <input
            name="address"
            type="text"
            className="address"
            placeholder="Travessa Terceira da Castanheira, Bairro Muruci"
            data-testid="customer_checkout__input-address"
            value={ endereco }
            onChange={ ({ target }) => setEndereco(target.value) }
          />
        </label>
        <label htmlFor="address-number">
          Número
          <input
            type="text"
            name="address-number"
            className="address-number"
            id="address-number"
            placeholder="198"
            data-testid="customer_checkout__input-address-number"
            value={ numEndereco }
            onChange={ ({ target }) => setNumEndereco(target.value) }
          />
        </label>
        <button
          type="button"
          className="checkoutOrder"
          data-testid="customer_checkout__button-submit-order"
          onClick={ () => addressValidation(endereco, numEndereco) && sendPost() }
        >
          FINALIZAR PEDIDO
        </button>
      </form>
    </DeliveryDetails>
  );
}
