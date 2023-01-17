import styles from "./Product.module.css"

const Product = (
    {
        productImage, filteredName, productDescription, discountedPrice, actualPrice
    }
) => {
    return (
        <div className={styles.product}>
            <div className={styles.productImage}>
                <img src={productImage} />
            </div>
            <div className={styles.productDetails}>
                <p className={styles.brand}>{filteredName}</p>
                <div className={styles.productDesc}>
                    <p >{productDescription}</p>

                </div>
                <div className={styles.price}>
                    <p className={styles.discountedPrice}>Rs. {discountedPrice}</p>
                    <p className={styles.actualPrice}>Rs. {actualPrice}</p>
                    <p className={styles.discountPercentage}>({Math.ceil((discountedPrice / actualPrice) * 100)} % OFF)</p>
                </div>

            </div>
        </div>
    )

}
export default Product;