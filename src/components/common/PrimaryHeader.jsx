import React from "react";
import "./PrimaryHeader.css";

const PrimaryHeader = ({ title, className = "" }) => {
  return (
    <div className={`primary-header ${className}`}>
      <span className="primary-header__indicator"></span>

      <h2 className="primary-header__title">
        {title}
      </h2>
    </div>
  );
};

export default PrimaryHeader;