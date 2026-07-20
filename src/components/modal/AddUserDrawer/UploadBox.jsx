import React from "react";
import "./UploadBox.css";

import UploadIcon from "../../../assets/svg/upload.svg";

const UploadBox = ({
    title = "Upload File",
    description = "Drag & Drop files here or click to browse",
    supportedFormats = "PNG, JPG, JPEG (Max 5 MB)",
    type,
    name,
    onChange,
    group

}) => {
    return (
        <div className="upload-box">

            <input
                type={type}
                name={name}
                onChange={onChange}
                data-group={group}
                className="upload-input"
            />

            <div className="upload-content">

                <div className="upload-icon">

                    <img
                        src={UploadIcon}
                        alt="Upload"
                    />

                </div>

                <h4 className="upload-title">
                    {title}
                </h4>

                <p className="upload-description">
                    {description}
                </p>

                <span className="upload-formats">
                    {supportedFormats}
                </span>

                <button
                    type="button"
                    className="browse-btn"
                >
                    Browse File
                </button>

            </div>

        </div>
    );
};

export default UploadBox;