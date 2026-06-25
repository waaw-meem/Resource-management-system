import React, { useState } from "react";
import "./ProfileDropdown.css";

const ProfileDropdown = () => {
    const [darkMode, setDarkMode] = useState(false);

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

            <div className="dropdown-item">
                <span className="dropdown-icon">
                    👤
                </span>

                <span>View Profile</span>
            </div>

            <div className="dropdown-item">
                <span className="dropdown-icon">
                    ↪
                </span>

                <span>Logout</span>
            </div>

        </div>
    );
};

export default ProfileDropdown;