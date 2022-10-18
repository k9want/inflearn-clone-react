import React from 'react'
import Footer from '../components/common/footer/Footer'
import Header from '../components/common/header/Header'
import CommunityBanner from '../components/community/CommunityBanner'
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
        <CommunityBanner />
        <QuestionsMain />
      </div>
      <Footer loginModal={props.loginModal} />
    </>
  )
}

export default CommunityQuestions
