import React from 'react'
import Footer from '../components/common/footer/Footer'
import Header from '../components/common/header/Header'
import useLoginModal from '../hook/useLoginModal'
import CommunityReviewsMain from '../components/community/reviews/CommunityReviewsMain'
import { communityMentoringsReviewsDummy } from '../components/community/mentoringsReviews/communityMentoringsReviewsDummy'
import CommunityBanner from '../components/community/CommunityBanner'

function CommunityMentoringsReviews(props) {
  const banner = {
    title: '멘토링 후기',
    description:
      '선배와 동료들에게 조언을 구해보세요. 더 빨리, 멀리 갈 수 있어요.😀',
  }
  const navNow = 5
  const page = [1, 2, 3, 4, 5, 6, 7, 8, 9]

  return (
    <>
      <Header
        setLoginModal={props.setLoginModal}
        loginModal={props.loginModal}
      />
      <div style={useLoginModal(props.loginModal)}>
        <CommunityBanner banner={banner} />
        <CommunityReviewsMain
          navNow={navNow}
          data={communityMentoringsReviewsDummy}
          page={page}
        />
      </div>
      <Footer loginModal={props.loginModal} />
    </>
  )
}

export default CommunityMentoringsReviews
