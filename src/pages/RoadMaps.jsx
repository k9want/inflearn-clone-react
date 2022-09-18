import Apply from '../components/common/apply/Apply'
import Footer from '../components/common/footer/Footer'
import Header from '../components/common/header/Header'
import RoadmapsMain from '../components/roadmaps/RoadmapsMain'
import RoadmapsSearch from '../components/roadmaps/RoadmapsSearch'
import useLoginModal from '../hook/useLoginModal'

function RoadMaps(props) {
  return (
    <>
      <Header
        setLoginModal={props.setLoginModal}
        loginModal={props.loginModal}
      />
      <div style={useLoginModal(props.loginModal)}>
        <RoadmapsSearch />
        <RoadmapsMain />
        <Apply />
      </div>
      <Footer loginModal={props.loginModal} />
    </>
  )
}

export default RoadMaps
