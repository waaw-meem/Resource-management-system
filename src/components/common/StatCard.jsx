import React from 'react'

import "./StatCard.css"
import UsersIconInWhite from "../../assets/svg/users-white.svg"

const Stats = ({ title, value, icon, variant }) => {
    return (
        <div className="dashboard-card stat-card">

            <div className={`stat-icon ${variant === "pool" ? "stat-pool" : "stat-icon"}`}>
                <img src={icon} alt={title} />
            </div>

            <div>

                <h2>{value}</h2>

                <p>{title}</p>

            </div>

        </div>
    )
}

export default Stats