import React from "react";
import PropTypes from "prop-types";
import Styles from "./input.module.scss";

const Input = ({
  type,
  className,
  placeholder,
  defaultValue,
  value,
  id,
  name,
  onChange,
  autoComplete,
  reference,
  pattern,
  onKeyUp,
  onKeyDown,
  onKeyPress,
  readOnly,
  disabled,
}) => {
  
  return (
    <input 
      className={`${Styles.input} ${[className]} `}
      placeholder={placeholder} 
      autoComplete={autoComplete}
      disabled={disabled}
      id={id}
      type={type} 
      defaultValue={defaultValue}
      value={value}
      name={name}
      {...reference}
      onChange={onChange}
      {...pattern}
      onKeyUp={onKeyUp}
      onKeyDown={onKeyDown}
      onKeyPress={onKeyPress}
      readOnly={readOnly}
    />
  );
}
Input.defaultProps = {
  type: 'text',
  readOnly:false,
  disabled:false
};

Input.propTypes = {
  className: PropTypes.string,
  placeholder: PropTypes.string,
  variant: PropTypes.string,
  type:PropTypes.string,
  defaultValue: PropTypes.any, 
  value: PropTypes.any,
  id: PropTypes.string, 
  name: PropTypes.string,
  onChange:PropTypes.any,
  autoComplete:PropTypes.string,
  reference: PropTypes.any,
  pattern: PropTypes.string,
  onKeyUp: PropTypes.any,
  onKeyDown: PropTypes.any,
  onKeyPress: PropTypes.any,
  readOnly: PropTypes.bool,
  disabled: PropTypes.bool,
};

export default Input;