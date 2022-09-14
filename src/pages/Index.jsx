import React from 'react'
import Company from '../components/index/Company'
import CurationCourse from '../components/index/CurationCourse'
import FreeCourse from '../components/index/FreeCourse'
import HashTag from '../components/index/HashTag'
import IndexBanner from '../components/index/IndexBanner'
import NewbieCourse from '../components/index/NewbieCourse'
import RecentCourse from '../components/index/RecentCourse'
import Review from '../components/index/Review'
import RoadMapCourse from '../components/index/RoadMapCourse'
import Search from '../components/index/Search'
import Service from '../components/index/Service'
import MainSwiper from '../components/index/MainSwiper'
import useLoginModal from '../hook/useLoginModal'
import { mainPageDummy } from '../components/index/mainPageDummy'

function Index(props) {
  return (
    <main style={useLoginModal(props.loginModal)}>
      <MainSwiper
        mainBanner={mainPageDummy.result.mainBanner}
        mainBullets={mainPageDummy.result.mainBullets}
      />
      <Search />
      <HashTag />
      <FreeCourse freeCourse={mainPageDummy.result.freeCourse} />
      <NewbieCourse newbieCourse={mainPageDummy.result.newbieCourse} />
      <RoadMapCourse roadMapCourse={mainPageDummy.result.roadMapCourse} />
      <CurationCourse curationCourse={mainPageDummy.result.curationCourse} />
      <RecentCourse recentCourse={mainPageDummy.result.recentCourse} />
      <Review />
      <IndexBanner />
      <Company />
      <Service />
    </main>
  )
}

export default Index
