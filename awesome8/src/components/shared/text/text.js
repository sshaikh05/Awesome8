import React from 'react'
import PropTypes from 'prop-types'
import Styles from './text.module.scss'

/**
 * Name: Text
 * Desc: Render text
 * @param {node} children
 * @param {string} color
 * @param {isRequired} text
 * @param {string} strong
 * @param {string} variant
 * @param {string} className
 * @param {func} onClick
 */

const Text = ({
  children,
  color,
  text,
  strong,
  variant,
  className,
  onClick
}) => {
  const finalText = children || text
  const fontColor = color ? Styles[color] : ''
  const fontWeight = strong ? Styles[strong] : ''
  
  return (
    <span
      className={`${Styles[variant]} ${fontWeight} ${fontColor}  ${[className]}`.trimRight()}
      onClick={onClick}
    >
      {finalText}
    </span>
  )
}

// Default Props
Text.defaultProps = {
  variant: 'mdText',
  color: 'secondry',
  text: '',
  className: ''
}

// PropTypes Validation
Text.propTypes = {
  children: PropTypes.node,
  color: PropTypes.string,
  text: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.element
  ]).isRequired,
  strong: PropTypes.string,
  variant: PropTypes.string,
  className: PropTypes.string,
  onClick: PropTypes.func
}

export default Text
