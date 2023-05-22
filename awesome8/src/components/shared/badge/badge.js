import React from 'react'
import PropTypes from 'prop-types'
import Styles from './badge.module.scss'

/** Render Badge
 * @param {any} children
 * @param {any} className
 * @returns node
 */

const Badge = ({
  children,
  className,
}) => {
  return (
    <div
      className={`${Styles.badge} ${className}`}
    >
      {children}
    </div>
  )
}

Badge.propTypes = {
  children: PropTypes.any,
  className: PropTypes.any,
}

export default Badge