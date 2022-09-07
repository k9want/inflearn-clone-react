import Apply from '../components/common/apply/Apply'
import RoadmapsMain from '../components/roadmaps/RoadmapsMain'
import RoadmapsSearch from '../components/roadmaps/RoadmapsSearch'
import useLoginModal from '../hook/useLoginModal'

function RoadMaps(props) {
  return (
    <div style={useLoginModal(props.loginModal)}>
      <RoadmapsSearch />
      <RoadmapsMain />
      <Apply />
    </div>
  )
}

export default RoadMaps
