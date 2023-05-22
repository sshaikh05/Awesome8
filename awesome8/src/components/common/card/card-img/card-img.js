import React from 'react'
import PropTypes from 'prop-types'
import Styles from './card-img.module.scss'
import { Image } from '../../../shared'

/**
 * Render Card

 */

const CardImg = () => {
  return (
    <div className={Styles.cardImg}>
      <Image src='images/product.jpg' />
    </div>
  )
}

CardImg.propTypes = {
  heading: PropTypes.string,
}

export default CardImg
