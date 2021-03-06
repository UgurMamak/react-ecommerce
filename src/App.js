import { Routes, Route } from "react-router-dom";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

import Index from "./pages/Index";
import ProductListing from "./pages/ProductList/ProductList";
import ProductDetail from "./pages/ProductDetail/ProductDetail";
import NotFound from "./pages/404";
import Cart from "./pages/Cart/Cart";

import ReduxStatePage from "./pages/ReduxStatePage";

import ReduxExample from "./components/redux-example";
import Test from "./pages/test";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      {/*   <ReduxExample /> */}
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<Index />} />
        <Route path="product-listing" element={<ProductListing />} />
        <Route path="product-detail" element={<ProductDetail />} />
        <Route path="cart" element={<Cart />} />
        <Route path="redux-state-page" element={<ReduxStatePage />} />
        <Route path="test" element={<Test />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
