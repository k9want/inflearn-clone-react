import React from 'react'
import Banner from './banner/Banner'
import Navbar from './navbar/Navbar'
import LoginModal from './navbar/LoginModal'

function Header(props) {
  return (
    <>
      <Banner loginModal={props.loginModal} />
      <Navbar
        setLoginModal={props.setLoginModal}
        loginModal={props.loginModal}
      />
      {props.loginModal ? (
        <LoginModal setLoginModal={props.setLoginModal} />
      ) : null}
    </>
  )
}

export default Header
