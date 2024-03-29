import React from 'react'
import styles from "./ProductContainer.module.css"
import Product from '../product/Product'
import { productData } from '../../Data'

export default function ProductContainerHomeDecor() {
    return (
        <div className={styles.productContainer}>
            {productData.filter(item => item.category === "H").map(item => (
                <Product
                    productImage={item.productImage}
                    brand={item.brand}
                    productDescription={item.productDescription}
                    discountedPrice={item.discountedPrice}
                    actualPrice={item.actualPrice}
                    category={item.category}
                />
            ))}
            {/* {
                productData.map((item, index) => {
                    return (
                        <>
                            <Product
                                key={index}
                                productImage={item.productImage}
                                brand={item.brand}
                                productDescription={item.productDescription}
                                discountedPrice={item.discountedPrice}
                                actualPrice={item.actualPrice}
                                category={item.category}
                            />
                        </>

                    )
                })
            } */}
        </div>
    )
}
