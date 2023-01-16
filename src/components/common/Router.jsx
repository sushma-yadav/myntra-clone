import React from 'react'
import { Routes, Route, } from "react-router-dom";
import Banner from '../../pages/banner/Banner';
import Cart from '../cart/Cart';
import Login from '../login/Login';
import ProductContainer from '../productContainer/ProductContainer';
import WishList from '../wishlist/WishList';

function Router() {
    return (
        <Routes>
            <Route path='/' element={<Banner />} />
            <Route path="/men" element={<ProductContainer />} />
            <Route path='/login' element={<Login />} />
            <Route path='/wishlist' element={<WishList />} />
            <Route path='/cart' element={<Cart />} />
        </Routes>
    )
}

export default Router