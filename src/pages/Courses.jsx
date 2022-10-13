import React from 'react'
import Footer from '../components/common/footer/Footer'
import Header from '../components/common/header/Header'
import CoursesMain from '../components/courses/CoursesMain'
import useLoginModal from '../hook/useLoginModal'

function Courses(props) {
  return (
    <>
      <Header
        setLoginModal={props.setLoginModal}
        loginModal={props.loginModal}
      />
      <div style={useLoginModal(props.loginModal)}>
        <CoursesMain />
      </div>

      <Footer loginModal={props.loginModal} />
    </>
  )
}

export default Courses
