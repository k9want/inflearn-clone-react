import React from 'react'
import Footer from '../components/common/footer/Footer'
import Header from '../components/common/header/Header'
import { communityChatsDummy } from '../components/community/chats/communityChatsDummy'
import CommunityBanner from '../components/community/CommunityBanner'
import CommunityMain from '../components/community/CommunityMain'
import useLoginModal from '../hook/useLoginModal'

function CommunityChats(props) {
  const filter = []
  const formPlaceholder = '대화 내용을 검색해보세요!'
  const order = ['최신순', '정확도순', '댓글많은순', '좋아요순']
  const page = [1, 2, 3, 4, 5, 6, 7, 8, 9]
  const navNow = 1

  return (
    <>
      <Header
        setLoginModal={props.setLoginModal}
        loginModal={props.loginModal}
      />
      <div style={useLoginModal(props.loginModal)}>
        <CommunityBanner data={communityChatsDummy.result.banner} />
        <CommunityMain
          navNow={navNow}
          formPlaceholder={formPlaceholder}
          data={communityChatsDummy}
          filter={filter}
          order={order}
          page={page}
        />
      </div>
      <Footer loginModal={props.loginModal} />
    </>
  )
}

export default CommunityChats
