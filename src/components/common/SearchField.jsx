import React from "react";
import SearchIcon  from "../../assets/svg/search.svg"

import "./SearchField.css";

const SearchField = ({
    placeholder,
    value,
    onChange,
}) => {
    return (
        <div className="search-field">

            <input
                type="text"
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                className="search-input"
            />

            <button className="search-btn">
                <img src={SearchIcon} alt="Search" />
            </button>

        </div>
    );
};

export default SearchField;