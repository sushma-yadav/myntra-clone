import React from 'react'
import styles from "./ProductContainer.module.css"
import Product from '../product/Product'
import { productData } from '../../Data'

export default function ProductContainer() {
    return (
        <div className={styles.productContainer}>
            {
                productData.map((item, index) => {
                    return (
                        <Product
                            productImage={item.productImage}
                            brand={item.brand}
                            productDescription={item.productDescription}
                            discountedPrice={item.discountedPrice}
                            actualPrice={item.actualPrice}
                        />
                    )
                })
            }
        </div>
    )
}
