import React from 'react'
import PropTypes from 'prop-types'
import Styles from './comments.module.scss'
import {
  Image,
  Text
} from '../../../shared'

/**
 * Render Card

 */

const Comments = () => {
  return (
    <div className={Styles.comments}>
      <div className={`${Styles.commentBtns} ${Styles.dFlexCenter}`}>
        <div className={Styles.dFlexCenter}>
          <Image src='images/like.png' />
          <Text variant={'sm'} color={'gray3'}>5</Text>
        </div>
        <div className={Styles.dFlexCenter}>
          <Image src='images/chat.png' />
          <Text variant={'sm'} color={'gray3'}>5</Text>
        </div>
        <div className={Styles.dFlexCenter}>
          <Image src='images/tag.png' />
        </div>
        <div className={Styles.dFlexCenter}>
          <Image src='images/more.png' />
        </div>
      </div>

      <div className={Styles.commentSection}>
        <div className={`${Styles.cardTop} ${Styles.dFlexCenter}`}>
          <div className={`${Styles.userDetails}`}>
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
                <Text variant={'sm'} color={'secondary2'}>어머 제가 있던 테이블이 제일 반응이 좋았나보네요🤭 우짤래미님도 아시겠지만 저도 일반인 몸매 그 이상도 이하도 아니잖아요?! 그런 제가 기꺼이 도전해봤는데 생각보다 괜찮았어요! 오늘 중으로 라이브 리뷰 올라온다고 하니 꼭 봐주세용~! </Text>
                <div className={`${Styles.commentBtnsChild} ${Styles.dFlexCenter}`}>
                <div className={Styles.dFlexCenter}>
                  <Image src='images/like.png' />
                  <Text variant={'sm'} color={'gray3'}>5</Text>
                </div>
                <div className={Styles.dFlexCenter}>
                  <Image src='images/chat.png' />
                  <Text variant={'sm'} color={'gray3'}>5</Text>
                </div>
              </div>
              </div>
            </div>
          </div> 
          <Image src='images/more.png' className={Styles.more} />       
        </div>
        <div className={`${Styles.cardTop} ${Styles.childComment} ${Styles.dFlexCenter}`}>
          <div className={`${Styles.userDetails}`}>
            <div className={Styles.img}>
              <Image src='images/pic1.png' />
            </div>
            <div className={Styles.content}>
              <div className={Styles.dFlexCenter}>
                <Text variant={'md'} strong={'bold'} >ㅇㅅㅇ </Text>
                <Text variant={'xs'} color={'gray3'}>1일전 </Text>
              </div>
              <div>
                <Text variant={'sm'} color={'secondary2'}>오 대박! 라이브 리뷰 오늘 올라온대요? 챙겨봐야겠다 </Text>
                <div className={`${Styles.commentBtnsChild} ${Styles.dFlexCenter}`}>
                <div className={Styles.dFlexCenter}>
                  <Image src='images/like.png' />
                  <Text variant={'sm'} color={'gray3'}>5</Text>
                </div>
              </div>
              </div>
            </div>
          </div> 
          <Image src='images/more.png' className={Styles.more} />       
        </div>
      </div>
    </div>
  )
}

Comments.propTypes = {
  heading: PropTypes.string,
}

export default Comments
