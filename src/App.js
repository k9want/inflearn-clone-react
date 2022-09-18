import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import RoadMaps from './pages/RoadMaps'
import Index from './pages/Index'
import SignUp from './pages/SignUp'

function App() {
  const [loginModal, setLoginModal] = useState(false)
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <Index setLoginModal={setLoginModal} loginModal={loginModal} />
          }
        />
        <Route
          path="/roadmaps"
          element={
            <RoadMaps setLoginModal={setLoginModal} loginModal={loginModal} />
          }
        />
        <Route
          path="/signup"
          element={
            <SignUp setLoginModal={setLoginModal} loginModal={loginModal} />
          }
        />
      </Routes>
    </div>
  )
}

export default App
