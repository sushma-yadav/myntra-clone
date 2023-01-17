import styles from "./header.module.css";
import { useState } from "react";
import logo from "../../assets/images/myntralogo.png"
import { Link } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

function Header(props) {
    const linkItems = [{ name: "MEN", url: '/men' }, { name: "WOMEN", url: '/women' }, { name: "KIDS", url: '/kids' }, { name: "HOME & LIVING", url: '/home-living' }, { name: "BEAUTY", url: '/beauty' }, { name: "STUDIO", url: '/studio' }]
    const [showToggle, setShowToggle] = useState(false)
    const [showDropdown, setShowDropdown] = useState(false)
    const navigate = useNavigate()

    const handleSignOut = (e) => {
        e.preventDefault()
        const auth = getAuth();
        signOut(auth).then((res) => {
            console.log(res)
            navigate("/")
        }).catch((error) => {
            console.log(error)
        });
    }

    return (
        <div className={styles.header}>
            {showToggle && <div className={styles.toggleLinks} styles={{ transfrom: showToggle ? "translateX(0)" : "translateX(-500px)" }}>
                <ul>
                    {
                        linkItems.map((item, index) => {
                            return (
                                <li key={index}><a href={item.url}>{item.name}</a></li>
                            )
                        })
                    }
                </ul>
            </div>}
            <div className={styles.headerContainer}>
                <div className={styles.headerLeft}>
                    <div className={styles.toggle}>
                        <i className="fas fa-bars" onClick={() => setShowToggle(!showToggle)}></i>
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
                                        <li key={index}><a href={item.url}>{item.name}</a></li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </div>
                <div className={styles.headerRight}>
                    <div className={styles.search}>
                        <i className="fas fa-search"></i>
                        <input type="text" placeholder="Seach for products, brands and more" />
                    </div>
                    <div className={styles.headerIcons}>
                        <Link to="/login" className={styles.icons} style={props.userName ? { display: 'none' } : { display: "visile" }}>
                            <i className="far fa-user"></i>
                            <p>Profile</p>
                        </Link>
                        <Link to="wishlist" className={styles.icons}>
                            <i className="far fa-heart"></i>
                            <p>Wishlist</p>
                        </Link>
                        <Link to="/cart" className={styles.icons}>
                            <i className="fa fa-shopping-cart" aria-hidden="true"></i>
                            <p>Bag</p>
                        </Link>
                        {props.userName && <div className={styles.icons}>
                            <div className={styles.profile} onClick={() => setShowDropdown(!showDropdown)}>
                                <p className={styles.profileInitial}>{props.userName.charAt(0).toUpperCase()}</p>
                            </div>
                            {showDropdown && <div className={styles.logout} onClick={handleSignOut}>
                                <div style={{ display: "flex", gap: "10px" }}><i className="far fa-sign-out"></i>
                                    <p>Logout</p></div>
                            </div>}
                        </div>}
                    </div>
                </div>
            </div>

        </div >
    )
}
export default Header;