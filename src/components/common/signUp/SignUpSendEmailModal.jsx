import React from 'react'

function SignUpSendEmailModal(props) {
  return (
    <div className="signUp-send">
      <div className="signUp-send-info">
        <div className="signUp-send-info-title">
          <span>인증 메일</span>을 보내드렸어요.
          <br />
          <span>인증 메일</span>을 확인해주세요 ✉️️
        </div>
        <p className="signUp-send-info-description">
          반가워요. 인프런에 오신 것을 환영해요 🙌
          <span> 아직 한 단계가 더 남았어요!</span>
          가입하신 이메일을 인증해주시면, 인프런의 서비스를 마음껏 이용하실 수
          있습니다. 🙇 가입해주셔서 다시 한 번 감사드립니다 🙇
        </p>
      </div>
      <div className="signUp-send-button">
        <button onClick={() => props.setHiddenEmailModal(true)}>
          이전 페이지로 돌아가기
        </button>
      </div>
    </div>
  )
}

export default SignUpSendEmailModal
