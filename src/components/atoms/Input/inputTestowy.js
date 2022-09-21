import React from 'react';
import PropTypes from 'prop-types';

const InputTestowy = ({ placeholder }) => {
  return <input placeholder={placeholder} data-testid="sample-input" type="text" />;
};

InputTestowy.propTypes = {
  placeholder: PropTypes.string,
};

InputTestowy.defaultProps = {
  placeholder: 'Your Value',
};

export default InputTestowy;
