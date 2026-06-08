import React from 'react'
import { Link } from "react-router-dom";
import useLoginContext from "../../hooks/useLoginContext"
import Alert from '../../components/Alert';

import "./login.css"
import Logo from "../../assets/images/Logo-RMS.png"
import User from "../../assets/svg/User.svg"
import Eye from "../../assets/svg/Eye.svg"
import Button from '../../components/Button';

const Login = () => {

    const {
        formData,
        setFormData,
        handleSubmit,
        showPassword,
        passwordToggle,
        alert,
        setAlert
    } = useLoginContext()


    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;

        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    return (

        <div className="container-fluid logo-container">


            <div className='row h-100'>

                <div className="col-6 left-container"></div>
                <div className="col-6 right-container">
                    <div className="main-container d-flex align-items-center justify-content-center flex-column gap-5">
                        {
                            alert.show && (
                                <Alert
                                    variant={alert.variant}
                                    onClose={() =>
                                        setAlert(prev => ({
                                            ...prev,
                                            show: false
                                        }))
                                    }
                                >
                                    {alert.message}
                                </Alert>
                            )
                        }
                        <div className="logo">
                            <img src={Logo} alt="logo" />
                        </div>
                        <div className="input-fields">

                            <form onSubmit={handleSubmit}>
                                <div className="input-group-custom">
                                    <label htmlFor="username">Username</label>

                                    <div className="input-wrapper">
                                        <input
                                            value={formData.username}
                                            onChange={handleChange}
                                            type="email"
                                            id="username"
                                            name='username'
                                            placeholder="usama@systemsltd.com"
                                        />

                                        <img src={User} alt="user" className='svg' style={{ cursor: 'none' }} />
                                    </div>
                                </div>

                                <div className="input-group-custom">
                                    <label htmlFor="password">Password</label>

                                    <div className="input-wrapper">
                                        <input
                                            value={formData.password}
                                            onChange={handleChange}
                                            type={showPassword ? 'text' : 'password'}
                                            id="password"
                                            name='password'
                                            placeholder="Password"
                                        />

                                        <img src={Eye} alt="eye" className='svg' onClick={passwordToggle} />
                                    </div>
                                </div>

                                <div className='d-flex align-items-center justify-content-between'>
                                    <div className="checkbox-group">
                                        <input
                                            type="checkbox"
                                            id="checkbox"
                                            name="rememberMe"
                                            checked={formData.rememberMe}
                                            onChange={handleChange}
                                            className="checkbox-input"
                                        />

                                        <label htmlFor="checkbox" className="checkbox-label">
                                            <span className="checkbox-custom"></span>
                                            Keep me logged in
                                        </label>
                                    </div>

                                    <Link to="/forgot-password" className='login-link'>Forgot Password?</Link>


                                </div>

                                <Button variant='primary' className="login-btn">LOGIN IN</Button>
                            </form>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login