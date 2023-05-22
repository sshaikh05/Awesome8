import React from 'react'
import PropTypes from 'prop-types'
import Styles from './card-footer.module.scss'
import { Button, Image, Input } from '../../shared'

/**
 * Render Card

 */

const CardFooter = () => {
  return (
    <div className={`${Styles.cardFooter} ${Styles.dFlexCenter}`}>
      <Image src='images/imagesmode.png' />
      <Input type={'text'} placeholder={'댓글을 남겨주세요.'} />
      <Button variant={'secondry'}>등록</Button>
    </div>
  )
}

CardFooter.propTypes = {
  heading: PropTypes.string,
}

export default CardFooter
