import React from 'react';
import classNames from 'classnames';
import './alert.css';

const Alert = ({
    children,
    variant = 'success',
    className,
    onClose,
    ...rest
}) => {
    const classes = classNames(
        'alert',
        className,
        {
            'alert-success': variant === 'success',
            'alert-danger': variant === 'danger',
        }
    );

    return (
        <div className={classes} {...rest}>
            <div className="alert-content">
                {children}
            </div>

            <button
                type="button"
                className="alert-close"
                onClick={onClose}
            >
                &times;
            </button>
        </div>
    );
};

export default Alert;