import React from "react";
import { iconMap } from "../../utility/icons";
import "./ConfigCard.css";

const ConfigCard = ({ icon, title, description, onClick }) => {
    return (
        <div className="config-card" onClick={onClick}>
            <div className="config-card-icon">
                <img src={iconMap[icon]} alt={title} />
            </div>

            <div className="config-card-content">
                <h5>{title}</h5>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default ConfigCard;