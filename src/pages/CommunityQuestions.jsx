import React from 'react'
import Footer from '../components/common/footer/Footer'
import Header from '../components/common/header/Header'
import CommunityBanner from '../components/community/CommunityBanner'
import { communityQustionDummy } from '../components/community/questions/communityQustionDummy'
import CommunityMain from '../components/community/CommunityMain'
import useLoginModal from '../hook/useLoginModal'

function CommunityQuestions(props) {
  const filter = ['전체', '미해결', '해결됨']
  const formPlaceholder = '궁금한 질문을 검색해보세요!'
  const order = ['최신순', '정확도순', '답변많은순', '좋아요순']
  const page = [1, 2, 3, 4, 5, 6, 7, 8, 9]
  const navNow = 0

  return (
    <>
      <Header
        setLoginModal={props.setLoginModal}
        loginModal={props.loginModal}
      />
      <div style={useLoginModal(props.loginModal)}>
        <CommunityBanner data={communityQustionDummy.result.banner} />
        <CommunityMain
          navNow={navNow}
          formPlaceholder={formPlaceholder}
          data={communityQustionDummy}
          filter={filter}
          order={order}
          page={page}
        />
      </div>
      <Footer loginModal={props.loginModal} />
    </>
  )
}

export default CommunityQuestions
