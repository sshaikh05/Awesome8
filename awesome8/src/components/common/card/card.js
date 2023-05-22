import React from 'react'
import PropTypes from 'prop-types'
import Styles from './card.module.scss'
import { Badge, Button, Heading, Image, Text } from '../../shared'
import CardImg from './card-img/card-img'
import Comments from './comments/comments'

/**
 * Render Card

 */

const Card = () => {
  return (
    <div className={Styles.card}>
      <div className={`${Styles.cardTop} ${Styles.dFlexCenter}`}>
        <div className={`${Styles.userDetails} ${Styles.dFlexCenter}`}>
          <div className={Styles.img}>
            <Image src='images/pic2.png' />
          </div>
          <div className={Styles.content}>
            <div className={Styles.dFlexCenter}>
              <Text variant={'md'} strong={'bold'} >안녕 나 응애 </Text>
              <Image src='images/checked.png' />
              <Text variant={'xs'} color={'gray3'}>1일전 </Text>
            </div>
            <div>
              <Text variant={'sm'} color={'gray3'}>165cm </Text>
              <Text variant={'sm'} color={'gray3'}>&#x2022; </Text>
              <Text variant={'sm'} color={'gray3'}>53kg </Text>
            </div>
          </div>
        </div>
        <Button variant={'primary'}>팔로우</Button>
      </div>
      <Heading headingType={'h4'} headingText={'지난 월요일에 했던 이벤트 중 가장 괜찮은 상품 뭐야?'} />
      <div className={Styles.description}>
        <Text variant={'sm'} color={'secondary2'} strong={'medium'}>지난 월요일에 2023년 S/S 트렌드 알아보기 이벤트 참석했던 팝들아~ 혹시 어떤 상품이 제일 괜찮았어? </Text>
        <Text variant={'sm'} color={'secondary2'} strong={'medium'}>후기 올라오는거 보면 로우라이즈? 그게 제일 반응 좋고 그 테이블이 제일 재밌었다던데 맞아???</Text>
        <Text variant={'sm'} color={'secondary2'} strong={'medium'}>올해 로우라이즈가 트렌드라길래 나도 도전해보고 싶은데 말라깽이가 아닌 사람들도 잘 어울릴지 너무너무 궁금해ㅜㅜ로우라이즈 테이블에 있었던 팝들 있으면 어땠는지 후기 좀 공유해주라~~!</Text>
      </div>
      <div className={Styles.bages}>
        <Badge>#2023</Badge>
        <Badge>#TODAYISMONDAY</Badge>
        <Badge>#TOP</Badge>
        <Badge>#POPS!</Badge>
        <Badge>#WOW</Badge>
        <Badge>#ROW</Badge>
      </div>
      <CardImg />
      <Comments />
    </div>
  )
}

Card.propTypes = {
  heading: PropTypes.string,
}

export default Card
