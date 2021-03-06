import React from 'react';
import classNames from 'classnames';
const Button = ({ onclick, className, outline, children }) => {
  return (
    <button
      onClick={onclick}
      className={classNames('button', className, {
        'button--outline': outline,
      })}
    >
      {children}
    </button>
  );
};
export default Button;
