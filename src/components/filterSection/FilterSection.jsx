import React from 'react'
import styles from "./FilterSection.module.css"

export default function FilterSection() {
    return (
        <div>
            <div className={styles.filter}>
                <p>Category</p>
                <div className={styles.checkboxLabel}>
                    <input type="checkbox" id="shirts" name="vehicle1" value="Bike" />
                    <label for="shirts"> T-shirts (87686)</label><br />
                    <input type="checkbox" id="shirts" name="vehicle1" value="Bike" />
                    <label for="shirts"> T-shirts (87686)</label><br />
                    <input type="checkbox" id="shirts" name="vehicle1" value="Bike" />
                    <label for="shirts"> T-shirts (87686)</label><br />
                    <input type="checkbox" id="shirts" name="vehicle1" value="Bike" />
                    <label for="shirts"> T-shirts (87686)</label><br />
                    <input type="checkbox" id="shirts" name="vehicle1" value="Bike" />
                    <label for="shirts"> T-shirts (87686)</label><br />
                </div>
            </div>

        </div>
    )
}
