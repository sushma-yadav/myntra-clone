import React from 'react'
import { Routes, Route, } from "react-router-dom";
import Banner from '../../pages/banner/Banner';
import ProductContainer from '../productContainer/ProductContainer';

function Router() {
    return (
        <Routes>
            <Route path='/' element={<Banner />} />
            <Route path="/men" element={<ProductContainer />} />
        </Routes>
    )
}

export default Router