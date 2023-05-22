import React from 'react'
import PropTypes from 'prop-types'
import Styles from './button.module.scss'

/** Render Button
 * @param {string} variant
 * @param {string} type
 * @param {string} btnType
 * @param {any} children
 * @param {any} className
 * @param {func} onClick
 * @returns node
 */

const Button = ({
  variant,
  type,
  children,
  className,
  onClick,
  isDisabled
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`${Styles.button} ${Styles[variant]} ${className}`}
      disabled={isDisabled}
    >
      {children}
    </button>
  )
}

Button.propTypes = {
  variant: PropTypes.string,
  type: PropTypes.string,
  children: PropTypes.any,
  className: PropTypes.any,
  onClick: PropTypes.func,
  isDisabled: PropTypes.bool
}

Button.defaultProps = {
  variant: "solid",
  children: 'Button Title',
  isDisabled: false
}

export default Button