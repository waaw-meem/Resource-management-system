import React from "react";

import CalendarIcon from "../../assets/svg/calendar-white.svg";
import "./DashboardBanner.css";

const DashboardBanner = ({ title, event }) => {
  return (
    <div className="dashboard-banner">
      <div className="dashboard-banner__overlay">
        <div className="dashboard-banner__badge">
          {title}
        </div>

        <div className="dashboard-banner__divider"></div>

        <div className="dashboard-banner__content">
          <span className="dashboard-banner__icon">
            <img src={CalendarIcon} alt="Calendar" />
          </span>

          <span className="dashboard-banner__text">
            {event}
          </span>
        </div>
      </div>
    </div>
  );
};

export default DashboardBanner;