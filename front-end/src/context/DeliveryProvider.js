import React from 'react';
import PropTypes from 'prop-types';
import DeliveryContext from './DeliveryContext';

function DeliveryProvider({ children }) {
  return (
    <DeliveryContext.Provider value="a">
      {children}
    </DeliveryContext.Provider>
  );
}

DeliveryProvider.propTypes = {
  children: PropTypes.instanceOf(Object).isRequired,
};

export default DeliveryProvider;
