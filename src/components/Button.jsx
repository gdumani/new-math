import React from 'react';
import PropTypes from 'prop-types';

const Button = (props) => {
  const { lbl, cl, onClick } = props;
  return (
    <button type="button" className={cl} onClick={onClick}>{lbl}</button>

  );
};

Button.propTypes = {
  lbl: PropTypes.string.isRequired,
  cl: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
export default Button;
