import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Courses from './pages/Courses'
import RoadMaps from './pages/RoadMaps'
import Index from './pages/Index'
import SignUp from './pages/SignUp'
import Mentors from './pages/Mentors'
import CommunityQuestions from './pages/CommunityQuestions'
import CommunityChats from './pages/CommunityChats'
import CommunityStudies from './pages/CommunityStudies'
import CommunityReviews from './pages/CommunityReviews'
import CommunityMentoringsReviews from './pages/CommunityMentoringsReviews'

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
          path="/courses"
          element={
            <Courses setLoginModal={setLoginModal} loginModal={loginModal} />
          }
        ></Route>
        <Route
          path="/roadmaps"
          element={
            <RoadMaps setLoginModal={setLoginModal} loginModal={loginModal} />
          }
        />
        <Route
          path="/mentors"
          element={
            <Mentors setLoginModal={setLoginModal} loginModal={loginModal} />
          }
        />
        <Route
          path="/community/questions"
          element={
            <CommunityQuestions
              setLoginModal={setLoginModal}
              loginModal={loginModal}
            />
          }
        />
        <Route
          path="/community/chats"
          element={
            <CommunityChats
              setLoginModal={setLoginModal}
              loginModal={loginModal}
            />
          }
        />
        <Route
          path="/community/studies"
          element={
            <CommunityStudies
              setLoginModal={setLoginModal}
              loginModal={loginModal}
            />
          }
        />
        <Route
          path="/community/reviews"
          element={
            <CommunityReviews
              setLoginModal={setLoginModal}
              loginModal={loginModal}
            />
          }
        />
        <Route
          path="/community/mentorings-reviews"
          element={
            <CommunityMentoringsReviews
              setLoginModal={setLoginModal}
              loginModal={loginModal}
            />
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
