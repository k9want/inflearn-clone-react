import { useState } from 'react'
import Apply from './components/Apply'
import Banner from './components/Banner'
import LoginModal from './components/common/LoginModal'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
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
