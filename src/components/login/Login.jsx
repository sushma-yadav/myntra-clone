import React from 'react'
import styles from './login.module.css'

export default function Login() {



    const handleSubmit = (e) => {
        e.preventDefault()
    }


    return (
        <div className={styles.login}>
            <div className={styles.loginModal}>
                <form action="">
                    <h4 className={styles.loginHeading}>Login</h4>
                    <input type="text" placeholder='Enter your user name' />
                    <input type="text" placeholder='Password' />
                    <button type='submit' onClick={handleSubmit}>Submit</button>
                </form>
            </div>
        </div >
    )
}
