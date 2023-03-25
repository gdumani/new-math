import React from 'react';
import PropTypes from 'prop-types';

const Button = (props) => {
  const { lbl, cl } = props;
  return (
    <button type="button" className={cl}>{lbl}</button>

  );
};

Button.propTypes = {
  lbl: PropTypes.string.isRequired,
  cl: PropTypes.string.isRequired,
};
export default Button;
