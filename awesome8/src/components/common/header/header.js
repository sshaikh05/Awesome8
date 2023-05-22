import React from 'react'
import PropTypes from 'prop-types'
import Styles from './header.module.scss'
import { Heading, Image } from '../../shared'
/**
 * Render Header
 * @param {string} heading

 */

const Header = ({
  heading,
}) => {
  return (
    <div className={Styles.header}>
      <Image src='images/back.png' />
      <Heading headingType={'h3'} headingText={heading} fontWeight={'bold'} color={'secondry'} />
      <Image src='images/bell.png' />
    </div>
  )
}

Header.propTypes = {
  heading: PropTypes.string,
}

export default Header
