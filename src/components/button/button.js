import React from "react";
import PropTypes from 'prop-types';
import ButtonStyled from "./button.styled";
const Index = (props) => {
  const {children, type,transparented,disabled,variant,color,size,onClick, width , className } = props;
  return (
    <ButtonStyled width={width} className={className} variant={variant} size={size} color={color} type={type} onClick={onClick}>
    {children}
    </ButtonStyled>
  );
};
Index.propTypes = {
  type: PropTypes.oneOf([
    'primary',
    'secondary',
    'success',
    'info',
    'warning',
    'danger',
    'link',
    'dark',
    'light',
    'white',
    'dashed',
    'error',
    'default',
  ]),
  shape: PropTypes.string,
  icon: PropTypes.string,
  size: PropTypes.string,
  color: PropTypes.string,
  outlined: PropTypes.bool,
  transparented: PropTypes.bool,
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.string, PropTypes.node]),
};

export default Index;
