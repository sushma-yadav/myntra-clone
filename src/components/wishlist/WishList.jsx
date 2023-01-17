import React from 'react'
import styles from './wishList.module.css'
import productImage from '../../assets/images/productImage.jpg'

export default function WishList() {
    const productDetail = [
        {
            name: "Pink Ethnic Motifs Printed Gotta Patti Anarkali Kurta"
        },
        {
            name: "Pink Ethnic Motifs Printed Gotta Patti Anarkali Kurta"
        },
        {
            name: "Pink Ethnic Motifs Printed Gotta Patti Anarkali Kurta"
        },
        {
            name: "Pink Ethnic Motifs Printed Gotta Patti Anarkali Kurta"
        },
        {
            name: "Pink Ethnic Motifs Printed Gotta Patti Anarkali Kurta"
        },
        {
            name: "Pink Ethnic Motifs Printed Gotta Patti Anarkali Kurta"
        },
    ]
    return (
        <div className={styles.wishlistSection}>
            {productDetail.map((item, index) => {
                return (
                    <div className={styles.wishlistCard} key={index}>
                        <div className={styles.productImg}>
                            <img src={productImage} alt="" />
                        </div>
                        <div className={styles.productDescription}>
                            <p className={styles.productName}>{item.name.slice(0, 29) + '...'}</p>
                            <div className={styles.productPrice}>
                                <p className={styles.discountPrice}>Rs.1399</p>
                                <p className={styles.actualPrice}>Rs.3499</p>
                                <p className={styles.offPrice}>(Rs.989 OFF)</p>
                            </div>

                        </div>
                        <div className={styles.moveBagButton}>
                            <p>move to bag</p>
                        </div>
                    </div>
                )
            })}

        </div>
    )
}
