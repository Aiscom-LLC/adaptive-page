import React from 'react';
import buttonStyles from './button.css';

const Button = ({ children, className, ...rest }) => (
  <button className={`${className} ${buttonStyles.button}`} {...rest}>{children}</button>
);

export default Button;
