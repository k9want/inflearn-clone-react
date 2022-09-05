import { useState } from 'react'
import Apply from './components/common/apply/Apply'
import Banner from './components/common/banner/Banner'
import LoginModal from './components/common/navbar/LoginModal'
import Footer from './components/common/footer/Footer'
import Navbar from './components/common/navbar/Navbar'
import RoadmapsMain from './components/roadmaps/RoadmapsMain'
import RoadmapsSearch from './components/roadmaps/RoadmapsSearch'

function App() {
  const [loginModal, setLoginModal] = useState(false)

  return (
    <div className="App">
      <Banner loginModal={loginModal} />
      <Navbar setLoginModal={setLoginModal} loginModal={loginModal} />
      <RoadmapsSearch loginModal={loginModal} />
      <RoadmapsMain loginModal={loginModal} />
      <Apply loginModal={loginModal} />
      <Footer loginModal={loginModal} />

      {loginModal ? <LoginModal setLoginModal={setLoginModal} /> : null}
    </div>
  )
}

export default App
