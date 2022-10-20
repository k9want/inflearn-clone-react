import React from 'react'
import Footer from '../components/common/footer/Footer'
import Header from '../components/common/header/Header'
import useLoginModal from '../hook/useLoginModal'
import CommunityReviewsBanner from '../components/community/reviews/CommunityReviewsBanner'
import CommunityReviewsMain from '../components/community/reviews/CommunityReviewsMain'
import { communityReviewsDummy } from '../components/community/reviews/communityReviewsDummy'
function CommunityReviews(props) {
  const navNow = 4
  const page = [1, 2, 3, 4, 5, 6, 7, 8, 9]

  return (
    <>
      <Header
        setLoginModal={props.setLoginModal}
        loginModal={props.loginModal}
      />
      <div style={useLoginModal(props.loginModal)}>
        <CommunityReviewsBanner />
        <CommunityReviewsMain
          navNow={navNow}
          data={communityReviewsDummy}
          page={page}
        />
      </div>
      <Footer loginModal={props.loginModal} />
    </>
  )
}

export default CommunityReviews
