import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from '@domain/App';
import store from '@store/index';
import { BrowserRouter as Router } from "react-router-dom";
const ROOT_ID = 'root';
require('./index.css');

const renderApp = () => ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  rootEl
);

const rootEl = document.getElementById(ROOT_ID);

const loadPage = async (): Promise<void> => {
  if (!rootEl) {
    // tslint:disable-next-line:no-console
    console.error(`Failed to find element #${ROOT_ID} in HTML DOM tree. Please check your HTML code.`);
    return;
  }

  try {
    renderApp();
  } catch (error) {
    console.error('Nie udalo sie zaladowac strony')
  }
};

loadPage().catch(() => { return; });
