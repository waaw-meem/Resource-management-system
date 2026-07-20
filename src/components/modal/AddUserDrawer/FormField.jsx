import React from "react";
import "./FormField.css";

const FormField = ({
    label,
    required = false,
    type = "text",
    placeholder = "",
    options = [],
    name,
    onChange,
    group
}) => {

    const renderField = () => {

        switch (type) {

            case "textarea":
                return (
                    <textarea
                        className="form-textarea"
                        placeholder={placeholder}
                        onChange={onChange}
                        name={name}
                        data-group={group}
                    />
                );

            case "select":
                return (
                    <select
                        className="form-select"
                        name={name}
                        data-group={group}
                        onChange={onChange}
                    >
                        <option value="">
                            Select
                        </option>

                        {options.map((option) => (
                            <option
                                key={option}
                                value={option}
                            >
                                {option}
                            </option>
                        ))}
                    </select>
                );

            default:
                return (
                    <input
                        type={type}
                        className="form-control"
                        onChange={onChange}
                        placeholder={placeholder}
                        name={name}
                        data-group={group}
                    />
                );
        }
    };

    return (
        <div className="form-group">

            {label && (
                <label className="form-label">

                    {label}

                    {required && (
                        <span className="required">
                            *
                        </span>
                    )}

                </label>
            )}

            {renderField()}

        </div>
    );
};

export default FormField;