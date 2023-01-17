import React from 'react'
import styles from "./ProductContainer.module.css"
import Product from '../product/Product'
import { productData } from '../../Data'

export default function ProductContainerWomen() {
    return (
        <div className={styles.productContainer}>
            {productData.filter(item => item.category === "F").map(item => (
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
