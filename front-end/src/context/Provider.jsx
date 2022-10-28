import React, { createContext, useState, useMemo } from 'react';
import PropTypes from 'prop-types';

export const Context = createContext();

export default function Provider({ children }) {
  const [loginForm, SetLoginForm] = useState({});

  const contextValue = useMemo(() => {
    const values = { loginForm, SetLoginForm };
    return values;
  }, [loginForm, SetLoginForm]);

  return (
    <Context.Provider value={ contextValue }>
      {children}
    </Context.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};
