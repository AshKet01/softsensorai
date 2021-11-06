import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

import Navbar from './components/layouts/Navbar.layout';
import Products from './components/Products.component';
import ShoppingCart from './components/Shopping_cart/ShoppingCart';

// REDUX
import { Provider } from 'react-redux';
import { store, persistor } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';


function App() {

  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Router>

            <Navbar />
            <Routes>
              <Route path="/" element={<Products />} />
              <Route path="/cart" element={<ShoppingCart />} />
            </Routes>
            {/* <Products /> */}
            {/* <ShoppingCart /> */}
          </Router>
        </PersistGate>
      </Provider>
    </>
  );
}

export default App;
