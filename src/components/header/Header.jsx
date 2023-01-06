import styles from "./header.module.css";
import { useState } from "react";
import logo from "../../assets/images/myntralogo.png"
import { Link } from "react-router-dom";

function Header() {
    const linkItems = [{ name: "MEN", url: '/men' }, { name: "WOMEN", url: '/women' }, { name: "KIDS", url: '/kids' }, { name: "HOME & LIVING", url: '/home-living' }, { name: "BEAUTY", url: '/beauty' }, { name: "STUDIO", url: '/studio' }]

    const [showToggle, setShowToggle] = useState(false)

    return (
        <div className={styles.header}>
            {showToggle && <div className={styles.toggleLinks} styles={{ transfrom: showToggle ? "translateX(0)" : "translateX(-500px)" }}>
                <ul>
                    {
                        linkItems.map((item, index) => {
                            return (
                                <li><a href={item.url}>{item.name}</a></li>
                            )
                        })
                    }
                </ul>
            </div>}
            <div className={styles.headerContainer}>
                <div className={styles.headerLeft}>
                    <div className={styles.toggle}>
                        <i class="fas fa-bars" onClick={() => setShowToggle(!showToggle)}></i>
                    </div>
                    <div className={styles.logo}>
                        <Link to="/">
                            <img src={logo} alt="myntra logo" />
                        </Link>
                    </div>
                    <div className={styles.links}>
                        <ul>
                            {
                                linkItems.map((item, index) => {
                                    return (
                                        <li><a href={item.url}>{item.name}</a></li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </div>
                <div className={styles.headerRight}>
                    <div className={styles.search}>
                        <i class="fas fa-search"></i>
                        <input type="text" placeholder="Seach for products, brands and more" />
                    </div>
                    <div className={styles.headerIcons}>
                        <div className={styles.icons}>
                            <i class="far fa-user"></i>
                            <p>Profile</p>
                        </div>
                        <div className={styles.icons}>
                            <i class="far fa-heart"></i>
                            <p>Wishlist</p>
                        </div>
                        <div className={styles.icons}>
                            <i class="far fa-heart"></i>
                            <p>Bag</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
export default Header;