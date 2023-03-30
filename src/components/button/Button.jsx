import React from 'react';
import PropTypes from 'prop-types';
import Btn from './Button_Style';

const Button = ({ type, children, clickBtn, id }) => { 
  return (
    <Btn type={type} onClick={() => clickBtn(id)}>
      {children}
    </Btn>
  );
};

Button.propTypes = {
  type: PropTypes.string.isRequired,
  id: PropTypes.string,
  clickBtn: PropTypes.func,
  children: PropTypes.node,
};


export default Button;
