import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "modern-normalize";
import App from './App.jsx';
import "./index.css";
import { Provider } from "react-redux";
import { store, persistor } from "./redux/store.js";
import { PersistGate } from 'redux-persist/integration/react';

import Loader from './components/loader/Loader';


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={<Loader />} persistor={persistor}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
