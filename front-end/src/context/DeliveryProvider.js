import React, { useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import DeliveryContext from './DeliveryContext';

function DeliveryProvider({ children }) {
  const [fullCarItens, setFullCarItens] = useState([]);

  const context = useMemo(() => {
    const values = { fullCarItens, setFullCarItens };
    return values;
  }, [fullCarItens, setFullCarItens]);

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
