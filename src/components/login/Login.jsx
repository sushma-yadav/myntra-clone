import React from 'react'
import styles from './login.module.css'
import loginImage from '../../assets/images/login-page-image.jpg'
import InputControl from '../common/inputControl/InputControl'
import { useState } from 'react'
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { auth } from '../../firebase'
import { useNavigate } from 'react-router-dom'
import { Oval } from 'react-loader-spinner'

export default function Login() {

    const [data, setData] = useState({
        name: "",
        email: "",
        password: '',
    })

    const navigate = useNavigate()
    const [validName, setValidName] = useState(true)
    const [validEmail, setValidEmail] = useState(true)
    const [validPassword, setValidPassword] = useState(true)
    const [error, setError] = useState(false)
    const [submitButtondisabled, setSubmitButtonDisabled] = useState(false)

    const validateName = (name) => {
        if (
            String(name)
                .toLowerCase()
                .match((/^[a-zA-Z ]{2,30}$/))
        ) {
            setValidName(true)
        } else {
            setValidName(false)
        }
    };

    const validateEmail = (email) => {
        if (
            String(email)
                .toLowerCase()
                .match(
                    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                )
        ) {
            setValidEmail(true);
        } else {
            setValidEmail(false);
        }
    };

    const validatePassword = (password) => {
        if (
            String(password)
                .toLowerCase()
                .match((/[0-9a-zA-Z]{6,}/))
        ) {
            setValidPassword(true)
        } else {
            setValidPassword(false)
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (data.name.length === 0 || data.email.length === 0 || data.password.length === 0) {
            setError(true)
        }
        else {
            if (validEmail || validName || validPassword) {
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
        }


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
                        onChange={(e) => {
                            validateName(e.target.value)
                            setData((prev) => ({ ...prev, name: e.target.value }))
                        }}
                    />
                    {error && data.name.length === 0 ? <span className={styles.errorMsg}> This Field is Required</span> : !validName ? <span className={styles.errorMsg}>Enter valid name</span> : ''}
                    <InputControl
                        placeholder="Enter your Email"
                        onChange={(e) => {
                            validateEmail(e.target.value)
                            setData((prev) => ({ ...prev, email: e.target.value }))
                        }}
                    />
                    {error && data.email.length === 0 ? <span className={styles.errorMsg}> This Field is Required</span > : !validEmail ? <span className={styles.errorMsg}>Enter valid email</span> : ''}
                    <InputControl
                        placeholder="Enter your password"
                        onChange={(e) => {
                            validatePassword(e.target.value)
                            setData((prev) => ({ ...prev, password: e.target.value }))
                        }}
                    />
                    {error && data.password.length === 0 ? <span className={styles.errorMsg}> This Field is Required</span> : !validPassword ? <span className={styles.errorMsg}>Enter minimum 6 characters</span> : ''}
                    <button type='submit' onClick={handleSubmit}>
                        {submitButtondisabled
                            ? <Oval
                                height={30}
                                width={30}
                                color="#fff"
                                wrapperStyle={{}}
                                wrapperClass=""
                                visible={true}
                                ariaLabel='oval-loading'
                                secondaryColor="#fff"
                                strokeWidth={5}
                                strokeWidthSecondary={5}
                            />
                            :
                            'Submit'}
                    </button>
                    <Oval
                        height={30}
                        width={30}
                        color="#fffff"
                        wrapperStyle={{}}
                        wrapperClass=""
                        visible={true}
                        ariaLabel='oval-loading'
                        secondaryColor="#ffffff"
                        strokeWidth={5}
                        strokeWidthSecondary={5}

                    />

                </form>
            </div>
        </div >
    )
}
