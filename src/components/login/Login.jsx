import React from 'react'
import styles from './login.module.css'
import loginImage from '../../assets/images/login-page-image.jpg'
import InputControl from '../common/inputControl/InputControl'
import { useState } from 'react'
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { auth } from '../../firebase'
import { useNavigate } from 'react-router-dom'

export default function Login() {

    const [data, setData] = useState({
        name: "",
        email: "",
        password: '',
    })

    const navigate = useNavigate()

    const [error, setError] = useState("")
    const [submitButtondisabled, setSubmitButtonDisabled] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        setSubmitButtonDisabled(true)
        createUserWithEmailAndPassword(auth, data.email, data.password)
            .then(async (res) => {
                const user = res.user
                setSubmitButtonDisabled(false)
                updateProfile(user, {
                    displayName: data.name
                })
                navigate('/')
            }).catch((err) => {
                setError(err.message)
                setSubmitButtonDisabled(false)
            })

    }


    return (
        <div className={styles.login}>
            <div className={styles.loginModal}>
                <div className={styles.imageDiv}>
                    <img src={loginImage} alt="" />
                </div>
                <form action="">
                    <h4 className={styles.loginHeading}>Login</h4>
                    <InputControl
                        placeholder="Enter your name"
                        onChange={(e) => { setData((prev) => ({ ...prev, name: e.target.value })) }}
                    />
                    <InputControl
                        placeholder="Enter your Email"
                        onChange={(e) => { setData((prev) => ({ ...prev, email: e.target.value })) }}
                    />
                    <InputControl
                        placeholder="Enter your password"
                        onChange={(e) => { setData((prev) => ({ ...prev, password: e.target.value })) }}
                    />
                    {/* <div style={{ backgroundColor: "red", color: "#ffffff", width: "100%", fontSize: "12px", fontWeight: "300px", padding: "5px" }}>{error}</div> */}
                    <button type='submit' onClick={handleSubmit} disabled={submitButtondisabled}>Submit</button>
                </form>
            </div>
        </div >
    )
}
