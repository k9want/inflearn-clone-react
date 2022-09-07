import { useState } from 'react'
import Header from './components/common/header/Header'
import Footer from './components/common/footer/Footer'
import { Routes, Route } from 'react-router-dom'
import RoadMaps from './pages/RoadMaps'
import Index from './pages/Index'
import useLoginModal from './hook/useLoginModal'

function App() {
  const [loginModal, setLoginModal] = useState(false)
  return (
    <div className="App">
      <Header setLoginModal={setLoginModal} loginModal={loginModal} />
      <Routes>
        <Route path="" element={<Index />} style={useLoginModal(loginModal)} />

        <Route
          path="/roadmaps"
          element={<RoadMaps loginModal={loginModal} />}
        />
      </Routes>

      <Footer loginModal={loginModal} />
    </div>
  )
}

export default App
