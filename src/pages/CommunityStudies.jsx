import React from 'react'
import Footer from '../components/common/footer/Footer'
import Header from '../components/common/header/Header'
import CommunityBanner from '../components/community/CommunityBanner'
import CommunityMain from '../components/community/CommunityMain'
import { communityStudiesDummy } from '../components/community/studies/communityStudiesDummy'
import useLoginModal from '../hook/useLoginModal'

function CommunityStudies(props) {
  const banner = {
    title: '함께 성장할 스터디를 모집해보세요',
    description: '강의 수강에서 더 나아가 함께 스터디까지!',
  }
  const filter = ['전체', '모집중', '모집완료']
  const formPlaceholder = '관심 스터디를 검색해보세요!'
  const order = ['최신순', '정확도순', '댓글많은순', '좋아요순']
  const page = [1, 2, 3, 4, 5, 6, 7, 8, 9]
  const navNow = 2

  return (
    <>
      <Header
        setLoginModal={props.setLoginModal}
        loginModal={props.loginModal}
      />
      <div style={useLoginModal(props.loginModal)}>
        <CommunityBanner banner={banner} />
        <CommunityMain
          navNow={navNow}
          formPlaceholder={formPlaceholder}
          data={communityStudiesDummy}
          filter={filter}
          order={order}
          page={page}
        />
      </div>
      <Footer loginModal={props.loginModal} />
    </>
  )
}

export default CommunityStudies
