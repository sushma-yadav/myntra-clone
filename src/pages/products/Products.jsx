import FilterSection from "../../components/filterSection/FilterSection";
import ProductContainer from "../../components/productContainer/ProductContainer";
import ProductHeader from "../../components/productHeader/ProductHeader";
import styles from "./Products.module.css"

function Products() {
    return (
        <div className={styles.productWrapper}>
            <ProductHeader />
            <div className={styles.productSection}>
                <div className={styles.filterSection}>
                    <FilterSection />
                </div>
                <div className={styles.products}>
                    <ProductContainer />
                </div>
            </div>

        </div>
    )

}

export default Products;