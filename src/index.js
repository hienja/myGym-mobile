import React, { Component } from 'react'
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './containers/app';

// const store = createStore();

export const Root = () => {
  return (
    <Provider
    // store={store}
    >
      <App />
    </Provider>
  )
};
