import React from 'react'
import useLoginModal from '../../../hook/useLoginModal'

export default function Banner(props) {
  return (
    <header className="banner" style={useLoginModal(props.loginModal)}>
      <div className="container">
        <div className="banner-wrapper">
          <div className="banner-left">
            <ul>
              <li>
                <a href="/">
                  <i className="ic-logo"></i>
                  <span>교육</span>
                </a>
              </li>
              <li>
                <a href="/">
                  <i className="ic-employment"></i>
                  <span>채용</span>
                </a>
              </li>
            </ul>
          </div>
          <div className="banner-right">
            <a href="/">지식공유 참여</a>
          </div>
        </div>
      </div>
    </header>
  )
}
