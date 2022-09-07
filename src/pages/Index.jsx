import React from 'react'
import Company from '../components/index/Company'
import CurationCourse from '../components/index/CurationCourse'
import FreeCourse from '../components/index/FreeCourse'
import HashTag from '../components/index/HashTag'
import IndexBanner from '../components/index/IndexBanner'
import NewbieCourse from '../components/index/NewbieCourse'
import RecentCourse from '../components/index/RecentCourse'
import Review from '../components/index/Review'
import RoadMap from '../components/index/RoadMap'
import Search from '../components/index/Search'
import Service from '../components/index/Service'
import Swiper from '../components/index/Swiper'
import useLoginModal from '../hook/useLoginModal'

function Index(props) {
  return (
    <main style={useLoginModal(props.loginModal)}>
      <Swiper />
      <Search />
      <HashTag />
      <FreeCourse />
      <NewbieCourse />
      <RoadMap />
      <CurationCourse />
      <RecentCourse />
      <Review />
      <IndexBanner />
      <Company />
      <Service />
    </main>
  )
}

export default Index
