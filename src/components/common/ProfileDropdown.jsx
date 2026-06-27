import React from "react";
import useThemeContext from "../../hooks/useThemeContext";
import useLoginContext from "../../hooks/useLoginContext";

import "./ProfileDropdown.css";

import LogOutIcon from "../../assets/svg/Logout.svg";
import profileIcon from "../../assets/svg/profile-user.svg";

const ProfileDropdown = () => {

    const { logoutUser } = useLoginContext();

    const {
        darkMode,
        setDarkMode
    } = useThemeContext();

    return (
        <div className="profile-dropdown">

            <div className="dark-mode-row">

                <span className="dropdown-title">
                    Dark Mode
                </span>

                <label className="toggle-switch">

                    <input
                        type="checkbox"
                        checked={darkMode}
                        onChange={() => setDarkMode(prev => !prev)}
                    />

                    <span className="toggle-slider"></span>

                </label>

            </div>

            <div className="dropdown-item d-flex align-items-center mb-2">

                <span className="dropdown-icon">
                    <img src={profileIcon} alt="Profile" />
                </span>

                <span>View Profile</span>

            </div>

            <div className="dropdown-item d-flex align-items-center"
                onClick={logoutUser}>

                <span className="dropdown-icon">
                    <img src={LogOutIcon} alt="Logout" />
                </span>

                <span>Logout</span>

            </div>

        </div>
    );
};

export default ProfileDropdown;