import { Routes, Route, Link } from "react-router-dom";

import './App.css';

import Header from "./components/header/Header"
import Footer from "./components/footer/Footer"

import Index from "./pages/Index"
import ProductListing from "./pages/ProductList/ProductList"
import ProductDetail from "./pages/ProductDetail/ProductDetail";
import NotFound from "./pages/404"
import Cart from "./pages/Cart/Cart";


function App() {
    return (
        <>
            <Header/>
            <Routes>
                <Route path='*' element={<NotFound />} />
                <Route path="/" element={<Index />} />
                <Route path="product-listing" element={<ProductListing />} />
                <Route path="product-detail" element={<ProductDetail />} />
                <Route path="cart" element={<Cart/>} />
            </Routes>
            <Footer/>
        </>
    );
}

export default App;
