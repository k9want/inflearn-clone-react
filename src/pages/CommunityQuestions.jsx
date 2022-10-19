import React from 'react'
import Footer from '../components/common/footer/Footer'
import Header from '../components/common/header/Header'
import CommunityBanner from '../components/community/CommunityBanner'
import { communityQustionDummy } from '../components/community/questions/communityQustionDummy'
import QuestionsMain from '../components/community/questions/QuestionsMain'
import useLoginModal from '../hook/useLoginModal'

function CommunityQuestions(props) {
  return (
    <>
      <Header
        setLoginModal={props.setLoginModal}
        loginModal={props.loginModal}
      />
      <div style={useLoginModal(props.loginModal)}>
        <CommunityBanner data={communityQustionDummy.result.banner} />
        <QuestionsMain data={communityQustionDummy} />
      </div>
      <Footer loginModal={props.loginModal} />
    </>
  )
}

export default CommunityQuestions
