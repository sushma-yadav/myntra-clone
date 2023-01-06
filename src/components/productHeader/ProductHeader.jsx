import React from 'react'
import styles from "./ProductHeader.module.css";

export default function ProductHeader() {
    return (
        <div className={styles.productHeader}>
            <div className={styles.breadcrum}>
                <ul>
                    <li><a href="#">Home /</a></li>
                    <li><a href="#">Clothing /</a></li>
                    <li><a href="#">Shirts /</a></li>
                    <li><a href="#">Casual Shirts For Men</a></li>
                </ul>
            </div>
            <div className={styles.heading}>Filter</div>
        </div>
    )
}
