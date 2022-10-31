import React from 'react'
import styled from 'styled-components'
import Footer from '../components/common/footer/Footer'
import Header from '../components/common/header/Header'
import MentorsBanner from '../components/mentors/MentorsBanner'
import MentorsMain from '../components/mentors/MentorsMain'
import useLoginModal from '../hook/useLoginModal'

function Mentors(props) {
  return (
    <>
      <Header
        setLoginModal={props.setLoginModal}
        loginModal={props.loginModal}
      />
      <MentorsWrapper style={useLoginModal(props.loginModal)}>
        <MentorsBanner />
        <MentorsMain />
      </MentorsWrapper>
      <Footer loginModal={props.loginModal} />
    </>
  )
}

const MentorsWrapper = styled.div`
  background-color: #f8f9fa;
`

export default Mentors
