import React, { useState, useContext, useRef, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import Notification from "../../features/Notification"
import useMenuContext from '../../hooks/useMenuContext'
import ProfileDropdown from '../common/ProfileDropdown'

import logo from "../../assets/images/Logo-RMS.png"
import Avatar from "../../assets/images/image-sl.png"
import { ReactComponent as Setting } from "../../assets/svg/tertiary.svg"
import { ReactComponent as NotificationIcon } from "../../assets/svg/notification.svg"
import "./navbar.css"

const Navbar = () => {

    const {
        isNotificationOpen,
        setIsNotificationOpen,
        isSettingOpen,
        setIsSettingOpen,
        openSettingConfiguration
    } = useMenuContext();
    
    const [isProfileOpen, setIsProfileOpen] = useState(false);

    const profileRef = useRef(null);
    const notificationRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                profileRef.current &&
                !profileRef.current.contains(event.target)
            ) {
                setIsProfileOpen(false);
            }
            if (
                notificationRef.current &&
                !notificationRef.current.contains(event.target)
            ) {
                setIsNotificationOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener(
                "mousedown",
                handleClickOutside
            );
        };
    }, []);

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navLinkClass = ({ isActive }) =>
        isActive ? "nav-link active-link" : "nav-link";


    return (
        <div className="navbar-container">
            <div className="image-container">
                <img src={logo} alt="Logo" className="img-fluid" />
            </div>
            <button
                className="menu-toggle"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
                ☰
            </button>
            <nav className={`navbar navbar-expand-lg navbar-light custom-navbar ${isMenuOpen ? "mobile-menu-open" : ""
                }`}>
                <NavLink to="/dashboard" className={navLinkClass}>
                    Dashboard
                </NavLink>

                <NavLink to="/interview-audit" className={navLinkClass}>
                    Interview Audit
                </NavLink>

                <NavLink to="/projects" className={navLinkClass}>
                    Projects
                </NavLink>

                <NavLink to="/create-profile" className={navLinkClass}>
                    Create Profile
                </NavLink>
            </nav>
            <div className="d-flex align-items-center justify-content-end gap-3 right-container mobile-only">
                <div className="icon-wrapper">
                    <Setting
                        className="setting-icon"
                        onClick={openSettingConfiguration}
                    />
                </div>

                <div className="notification-icon-box">
                    <NotificationIcon
                        alt="Notifications"
                        className="notification-icon"
                        onClick={() => {
                            console.log("clicked");
                            setIsNotificationOpen(!isNotificationOpen);
                        }}
                    />

                    <span className="notification-counter">
                        3
                    </span>

                    {isNotificationOpen && (
                        <div ref={notificationRef}>
                            <Notification />
                        </div>
                    )}
                </div>

                <div ref={profileRef} className="position-relative">
                    <div
                        className="profile-container d-flex align-items-center gap-3"
                        onClick={() => setIsProfileOpen(true)}
                    >
                        <p>Wali.M</p>
                        <img src={Avatar} alt='avatar' className='avatar-img' />

                    </div>

                    {isProfileOpen && <ProfileDropdown />}
                </div>
            </div>
        </div>
    )


}

export default Navbar