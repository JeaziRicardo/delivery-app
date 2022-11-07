import React, { useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import DeliveryContext from './DeliveryContext';

function DeliveryProvider({ children }) {
  const [choosedSeller, setChoosedSeller] = useState('');
  const [cartListItens, setCartListItens] = useState([]);

  const context = useMemo(() => {
    const values = { cartListItens, setCartListItens, choosedSeller, setChoosedSeller };
    return values;
  }, [cartListItens, setCartListItens, choosedSeller, setChoosedSeller]);

  return (
    <DeliveryContext.Provider value={ context }>
      {children}
    </DeliveryContext.Provider>
  );
}

DeliveryProvider.propTypes = {
  children: PropTypes.instanceOf(Object).isRequired,
};

export default DeliveryProvider;
