import React from 'react';
import classNames from 'classnames';

const Button = ({
  children,
  variant = 'primary',
  className,
  ...rest
}) => {
  const classes = classNames(
    'px-4 py-2 border rounded-md flex items-center gap-2 transition-colors',
    className,
    {
      'btn-primary text-white border-blue-900':
        variant === 'primary',

      'btn-secondary text-white border-purple-700':
        variant === 'secondary',

      'btn-tertiary text-white border-gray-900':
        variant === 'tertiary',

      'btn-light-blue text-blue-900 border-indigo-100':
        variant === 'lightBlue',

      'btn-light-green text-green-800 border-green-100':
        variant === 'lightGreen',

      'btn-light-yellow text-yellow-800 border-yellow-100':
        variant === 'lightYellow',
    }
  );

  return (
    <button {...rest} className={classes}>
      {children}
    </button>
  );
};

export default Button;