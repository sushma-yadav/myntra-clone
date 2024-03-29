import React from 'react'
import { Routes, Route, } from "react-router-dom";
import Banner from '../../pages/banner/Banner';
import Cart from '../cart/Cart';
import Login from '../login/Login';
import ProductContainerBeauty from '../productContainer/ProductContainerBeauty';
import ProductContainerHomeDecor from '../productContainer/ProductContainerHomeDecor';
import ProductContainerKid from '../productContainer/ProductContainerKid';
import ProductContainerMen from '../productContainer/productContainerMen';
import ProductContainerWomen from '../productContainer/ProductContainerWomen';
import WishList from '../wishlist/WishList';

function Router() {
    return (
        <Routes>
            <Route path='/' element={<Banner />} />
            <Route path="/men" element={<ProductContainerMen />} />
            <Route path="/women" element={<ProductContainerWomen />} />
            <Route path="/kids" element={<ProductContainerKid />} />
            <Route path="//home-living" element={<ProductContainerHomeDecor />} />
            <Route path="/beauty" element={<ProductContainerBeauty />} />
            <Route path='/login' element={<Login />} />
            <Route path='/wishlist' element={<WishList />} />
            <Route path='/cart' element={<Cart />} />
        </Routes>
    )
}

export default Router