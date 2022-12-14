import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const userDummy = {
  email: 'test1234@naver.com',
  pw: 'test1234!',
}

function LoginModal(props) {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [pw, setPw] = useState('')
  const [emailValid, setEmailValid] = useState(false)
  const [pwValid, setPwValid] = useState(false)

  const [hiddenPw, setHiddenPw] = useState(true)

  const handleEmail = (e) => {
    setEmail(e.target.value)
    const regex =
      /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i

    if (regex.test(e.target.value)) {
      setEmailValid(true)
    } else {
      setEmailValid(false)
    }
  }

  const handlePw = (e) => {
    setPw(e.target.value)
    const regex =
      /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+])(?!.*[^a-zA-z0-9$`~!@$!%*#^?&\\(\\)\-_=+]).{8,20}$/
    if (regex.test(e.target.value)) {
      setPwValid(true)
    } else {
      setPwValid(false)
    }
  }

  const onClickLoginButton = () => {
    if (!emailValid || !pwValid) {
      alert('이메일 또는 비밀번호를 확인해주세요')
      return
    }

    if (email === userDummy.email && pw === userDummy.pw) {
      alert('로그인 성공했습니다.')
    } else {
      alert('이메일 또는 비밀번호를 확인해주세요')
    }
  }

  const onKeyPressInput = (e) => {
    if (e.key === 'Enter') {
      onClickLoginButton()
    }
  }

  const onClickSignUp = (e) => {
    navigate('/signUp')
    props.setLoginModal(false)
  }

  return (
    <div className="modal">
      <div className="modal-wrapper">
        <span
          className="modal-close-button"
          onClick={() => props.setLoginModal(false)}
        >
          <svg
            width="16px"
            height="12"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 12 12"
          >
            <path
              fill="#3E4042"
              fillRule="evenodd"
              d="M.203.203c.27-.27.708-.27.979 0L6 5.02 10.818.203c.27-.27.709-.27.98 0 .27.27.27.708 0 .979L6.978 6l4.818 4.818c.27.27.27.709 0 .98-.27.27-.709.27-.979 0L6 6.978l-4.818 4.818c-.27.27-.709.27-.98 0-.27-.27-.27-.709 0-.979L5.022 6 .203 1.182c-.27-.27-.27-.709 0-.98z"
              clipRule="evenodd"
            ></path>
          </svg>
        </span>

        <span className="modal-logo">
          <svg
            width="16"
            id="ic-brand-logo"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 433 90"
          >
            <path
              className="A"
              d="M79.1 31.6c-2-4.6-4.7-8.7-8.1-12.2-3.5-3.5-7.5-6.3-12.1-8.3S49.3 8 43.9 8c-5.2 0-10.2.9-14.9 2.9s-8.8 4.7-12.4 8.1c-3.6 3.5-6.4 7.5-8.4 12.1A37.14 37.14 0 0 0 5.1 46c0 5.2.9 10.2 2.9 14.9s4.7 8.8 8.2 12.4 7.6 6.4 12.2 8.4c4.7 2 9.6 3.1 14.9 3.1l38.3.3.3-38.5c.1-5.3-.9-10.3-2.8-15zM74 77.4l-30.7-.3c-4.2 0-8.2-.9-11.9-2.5s-7-3.9-9.8-6.7A32.99 32.99 0 0 1 15 58c-1.6-3.8-2.3-7.7-2.3-11.9 0-4.3.9-8.3 2.5-12s3.9-6.9 6.7-9.7c2.9-2.8 6.2-4.9 9.9-6.5 3.8-1.6 7.7-2.3 11.9-2.3 4.3 0 8.3.9 12 2.5s6.9 3.8 9.7 6.7c2.8 2.8 4.9 6.1 6.5 9.8s2.3 7.7 2.3 12L74 77.4z"
            ></path>
            <path
              className="A"
              d="M76.9 83.7c-.9 0-1.8-.3-2.5-1L27.6 35.1c-1.4-1.4-1.3-3.6 0-4.9 1.4-1.4 3.6-1.3 4.9 0l46.8 47.6c1.4 1.4 1.3 3.6 0 4.9-.6.7-1.5 1-2.4 1z"
            ></path>
            <path
              className="A"
              d="M43.1 47.3c-.4 0-.8-.1-1.2-.2-1.8-.7-2.8-2.7-2.1-4.5l6.3-17.3c.7-1.8 2.7-2.8 4.5-2.1s2.8 2.7 2.1 4.5L46.4 45c-.5 1.4-1.9 2.3-3.3 2.3zm12.2 16.2H33.5C31.6 63.5 30 62 30 60c0-1.9 1.6-3.5 3.5-3.5h21.8c1.9 0 3.5 1.6 3.5 3.5 0 2-1.5 3.5-3.5 3.5zm44.1-32.4V85H88.8V31.1h10.6zm5.6 16.5c1.4-3.2 3.3-6.1 5.8-8.5 2.4-2.4 5.3-4.4 8.6-5.8s6.8-2.1 10.4-2.1c3.8 0 7.3.7 10.5 2.1s6.1 3.3 8.6 5.8c2.5 2.4 4.4 5.3 5.8 8.5s2.1 6.7 2.1 10.5v27h-10.7v-27c0-2.2-.4-4.3-1.3-6.3-.8-2-2-3.7-3.5-5.2s-3.2-2.6-5.2-3.5c-2-.8-4.1-1.3-6.4-1.3-2.2 0-4.3.4-6.3 1.3-2 .8-3.7 2-5.2 3.5s-2.6 3.2-3.5 5.2c-.8 2-1.3 4.1-1.3 6.3v27h-10.7v-27c.2-3.7.9-7.2 2.3-10.5zm76.1-26.2c-2 .8-3.7 2-5.2 3.5s-2.6 3.2-3.5 5.2c-.8 2-1.3 4.1-1.3 6.3v5.5h21.6v10.7h-21.6V85h-10.7V36.4c0-3.8.7-7.3 2.1-10.5s3.3-6.1 5.8-8.5 5.4-4.4 8.6-5.8c3.3-1.4 6.8-2.1 10.4-2.1h5.3v10.7h-5.3c-2.1 0-4.2.4-6.2 1.2zm43.2-11.9V85h-10.7V9.5h10.7zM270.5 66l7.6 7.6-3.7 3.7c-2.6 2.6-5.5 4.5-8.8 5.9s-6.7 2-10.3 2-7-.7-10.3-2c-3.3-1.4-6.2-3.3-8.8-5.9s-4.6-5.6-5.9-8.9-1.9-6.7-1.9-10.1.6-6.8 1.9-10.1 3.2-6.2 5.9-8.9c2.6-2.6 5.6-4.6 8.9-5.9s6.7-2 10.1-2 6.8.7 10.1 2 6.3 3.3 8.9 5.9l3.7 3.7L248 72.9c3 1.5 6.3 2 9.7 1.5s6.4-2.1 8.9-4.6l3.9-3.8zm-26.8-19.3c-3.2 3.2-4.8 7-4.8 11.5 0 2.5.6 4.8 1.7 7.1l10.6-10.6 6.4-6.3 4.7-4.7c-3-1.5-6.3-2-9.7-1.6-3.3.5-6.3 2.1-8.9 4.6zm64.8-15.6c3.8 0 7.3.7 10.5 2.1s6.1 3.3 8.5 5.8a27.88 27.88 0 0 1 5.8 8.5c1.4 3.2 2.1 6.7 2.1 10.5v27h-26.9c-3.7 0-7.2-.7-10.4-2.1-3.3-1.4-6.2-3.3-8.6-5.8-2.5-2.5-4.4-5.4-5.8-8.6-1.4-3.3-2.1-6.8-2.1-10.4 0-3.8.7-7.3 2.1-10.5s3.3-6.1 5.8-8.5 5.4-4.4 8.6-5.8c3.3-1.5 6.8-2.2 10.4-2.2zm16.2 43.2V58c0-2.2-.4-4.3-1.3-6.3-.8-2-2-3.7-3.5-5.2s-3.2-2.6-5.2-3.5c-2-.8-4.1-1.3-6.3-1.3s-4.4.4-6.4 1.3c-2 .8-3.7 2-5.2 3.5s-2.6 3.2-3.5 5.2c-.8 2-1.3 4.1-1.3 6.3s.4 4.4 1.3 6.4c.8 2 2 3.7 3.5 5.2s3.2 2.6 5.2 3.5c2 .8 4.1 1.3 6.4 1.3h16.3zm46.2-43.2v10.7h-5.4c-2.2 0-4.3.4-6.3 1.3-2 .8-3.7 2-5.2 3.5s-2.6 3.2-3.5 5.2c-.8 2-1.3 4.1-1.3 6.3v27h-10.8V58c0-3.8.7-7.3 2.1-10.5s3.3-6.1 5.8-8.5 5.4-4.4 8.6-5.8c3.3-1.4 6.8-2.1 10.4-2.1h5.6zm5.3 16.5c1.4-3.2 3.3-6.1 5.8-8.5 2.4-2.4 5.3-4.4 8.6-5.8s6.8-2.1 10.4-2.1c3.8 0 7.3.7 10.5 2.1s6.1 3.3 8.6 5.8c2.5 2.4 4.4 5.3 5.8 8.5s2.1 6.7 2.1 10.5v27h-10.7v-27c0-2.2-.4-4.3-1.3-6.3-.8-2-2-3.7-3.5-5.2s-3.2-2.6-5.2-3.5c-2-.8-4.1-1.3-6.4-1.3-2.2 0-4.3.4-6.3 1.3-2 .8-3.7 2-5.2 3.5s-2.6 3.2-3.5 5.2c-.8 2-1.3 4.1-1.3 6.3v27h-10.7v-27c.2-3.7.9-7.2 2.3-10.5z"
            ></path>
            <title>인프런 브랜드 로고</title>
          </svg>
        </span>

        <div className="modal-form">
          <div className="modal-login-info">
            <div className="modal-form-input">
              <input
                type="email"
                placeholder="이메일"
                onChange={handleEmail}
                onKeyPress={onKeyPressInput}
              />
            </div>

            {hiddenPw ? (
              <div className="modal-form-input input-password">
                <input
                  type="password"
                  placeholder="비밀번호"
                  onChange={handlePw}
                  onKeyPress={onKeyPressInput}
                />
                <span
                  className="input-password-toggle-button"
                  onClick={() => setHiddenPw(!hiddenPw)}
                >
                  <svg
                    width="16"
                    height="16"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill="#212529"
                      d="M10.333 8c0 1.289-1.044 2.333-2.333 2.333C6.71 10.333 5.667 9.29 5.667 8 5.667 6.711 6.71 5.667 8 5.667c1.289 0 2.333 1.044 2.333 2.333z"
                    ></path>
                    <path
                      fill="#212529"
                      fillRule="evenodd"
                      d="M8 2.333c-2.288 0-4.083 1.023-5.37 2.16C1.348 5.63.544 6.902.22 7.469.03 7.8.03 8.2.22 8.533c.323.566 1.127 1.838 2.41 2.973 1.287 1.138 3.082 2.16 5.37 2.16 2.288 0 4.083-1.022 5.37-2.16 1.283-1.135 2.087-2.407 2.41-2.973.19-.333.19-.733 0-1.065-.323-.567-1.127-1.839-2.41-2.974-1.287-1.138-3.082-2.16-5.37-2.16zm-6.912 5.63c.295-.516 1.035-1.685 2.205-2.72C4.461 4.21 6.03 3.333 8 3.333c1.97 0 3.54.877 4.707 1.91 1.17 1.035 1.91 2.204 2.205 2.72.008.015.01.028.01.037 0 .01-.002.022-.01.037-.295.516-1.035 1.685-2.205 2.72-1.168 1.033-2.737 1.91-4.707 1.91-1.97 0-3.54-.877-4.707-1.91-1.17-1.035-1.91-2.204-2.205-2.72-.008-.015-.01-.028-.01-.037 0-.01.002-.022.01-.037z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </span>
              </div>
            ) : (
              <div className="modal-form-input input-password">
                <input
                  type="text"
                  placeholder="비밀번호"
                  onChange={handlePw}
                  onKeyPress={onKeyPressInput}
                />
                <span
                  className="input-password-toggle-button"
                  onClick={() => setHiddenPw(!hiddenPw)}
                >
                  <svg
                    width="16"
                    height="16"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill="#212529"
                      d="M5.368 3.89C6.145 3.55 7.021 3.334 8 3.334c1.97 0 3.54.877 4.707 1.91 1.17 1.034 1.91 2.204 2.205 2.72.007.013.01.026.01.036 0 .01-.003.024-.012.04-.177.31-.518.862-1.02 1.478-.174.215-.142.53.073.704.214.174.529.142.703-.072.544-.67.915-1.269 1.113-1.614.188-.33.192-.733.001-1.068-.323-.567-1.127-1.838-2.41-2.974-1.287-1.137-3.082-2.16-5.37-2.16-1.13 0-2.143.25-3.035.642-.252.111-.367.407-.256.66.111.252.406.367.659.256z"
                    ></path>
                    <path
                      fill="#212529"
                      fillRule="evenodd"
                      d="M12.777 11.991c-1.225.928-2.822 1.675-4.777 1.675-2.288 0-4.083-1.022-5.37-2.16C1.348 10.37.544 9.099.22 8.532c-.191-.334-.188-.736 0-1.067.307-.537 1.044-1.705 2.212-2.791l-1.554-1.1c-.226-.159-.279-.471-.12-.696.16-.226.472-.28.697-.12l13.667 9.667c.226.16.279.471.12.697-.16.225-.472.279-.697.12l-1.768-1.25zm-9.51-6.726C2.115 6.292 1.384 7.447 1.09 7.96c-.008.015-.011.029-.011.04 0 .01.002.022.01.036.295.516 1.035 1.685 2.205 2.72C4.461 11.79 6.03 12.667 8 12.667c1.556 0 2.86-.547 3.916-1.285L9.572 9.724c-.415.378-.966.609-1.572.609-1.289 0-2.333-1.045-2.333-2.333 0-.323.065-.63.183-.909L3.268 5.265z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </span>
              </div>
            )}
          </div>
          <button
            type="button"
            className="modal-button"
            onClick={onClickLoginButton}
          >
            로그인
          </button>
        </div>

        <div className="modal-more-action">
          <span>비밀번호 찾기</span>
          <span onClick={() => onClickSignUp()}>회원가입</span>
        </div>

        <div className="social-login">
          <div className="login-line">
            <hr className="social-login-line" />
            <span className="social-login-line-text">간편 로그인</span>
          </div>

          <div className="social-login-group">
            <button className="social-button social-login-kakao">
              <svg
                width="18px"
                xmlns="http://www.w3.org/2000/svg"
                height="17"
                viewBox="0 0 18 17"
              >
                <g
                  transform="translate(0.000000,17.000000) scale(0.100000,-0.100000)"
                  stroke="none"
                >
                  <path
                    fill="#212529"
                    d="M38 154 c-15 -8 -30 -25 -34 -38 -6 -26 10 -66 27 -66 7 0 9 -10 5 -26 -7 -25 -6 -25 16 -10 12 9 31 16 41 16 29 0 75 28 82 50 10 31 -3 59 -35 75 -36 19 -67 18 -102 -1z"
                  ></path>
                </g>
              </svg>
            </button>
            <button className="social-button social-login-google">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                fill="none"
                viewBox="0 0 18 18"
              >
                <path
                  fill="#4285F4"
                  d="M17.785 9.169c0-.738-.06-1.276-.189-1.834h-8.42v3.328h4.942c-.1.828-.638 2.073-1.834 2.91l-.016.112 2.662 2.063.185.018c1.694-1.565 2.67-3.867 2.67-6.597z"
                ></path>
                <path
                  fill="#34A853"
                  d="M9.175 17.938c2.422 0 4.455-.797 5.94-2.172l-2.83-2.193c-.758.528-1.774.897-3.11.897-2.372 0-4.385-1.564-5.102-3.727l-.105.01-2.769 2.142-.036.1c1.475 2.93 4.504 4.943 8.012 4.943z"
                ></path>
                <path
                  fill="#FBBC05"
                  d="M4.073 10.743c-.19-.558-.3-1.156-.3-1.774 0-.618.11-1.216.29-1.774l-.005-.119L1.254 4.9l-.091.044C.555 6.159.206 7.524.206 8.969c0 1.445.349 2.81.957 4.026l2.91-2.252z"
                ></path>
                <path
                  fill="#EB4335"
                  d="M9.175 3.468c1.684 0 2.82.728 3.468 1.335l2.531-2.471C13.62.887 11.598 0 9.175 0 5.667 0 2.638 2.013 1.163 4.943l2.9 2.252c.727-2.162 2.74-3.727 5.112-3.727z"
                ></path>
              </svg>
            </button>
            <button className="social-button social-login-github">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                fill="none"
                viewBox="0 0 18 18"
              >
                <path
                  fill="#fff"
                  fillRule="evenodd"
                  d="M6.02 14.494c0 .074-.083.134-.188.134-.12.01-.203-.049-.203-.134 0-.075.083-.134.188-.134.11-.012.204.048.204.134zm-1.128-.168c-.025.074.047.16.156.182.094.038.203 0 .225-.074.022-.074-.047-.16-.156-.193-.094-.027-.2.01-.225.085zm1.604-.063c-.105.026-.178.097-.167.182.01.075.105.123.214.097.105-.026.178-.097.167-.171-.01-.071-.109-.12-.214-.108zM8.884 0C3.85 0 0 3.92 0 9.082c0 4.127 2.533 7.66 6.151 8.903.465.085.628-.209.628-.45 0-.231-.01-1.504-.01-2.286 0 0-2.541.558-3.075-1.109 0 0-.413-1.083-1.009-1.362 0 0-.83-.585.059-.574 0 0 .903.075 1.4.96.795 1.438 2.127 1.024 2.646.779.083-.596.32-1.009.58-1.255-2.028-.23-4.075-.532-4.075-4.112 0-1.024.276-1.538.857-2.193-.095-.242-.403-1.24.094-2.527.758-.242 2.504 1.005 2.504 1.005.726-.208 1.506-.316 2.279-.316.773 0 1.553.108 2.28.316 0 0 1.745-1.25 2.503-1.005.497 1.292.189 2.285.095 2.527.58.66.936 1.173.936 2.193 0 3.591-2.138 3.878-4.166 4.112.334.294.617.853.617 1.727 0 1.255-.011 2.807-.011 3.112 0 .242.167.536.628.45C15.54 16.742 18 13.21 18 9.082 18 3.919 13.917 0 8.884 0zM3.527 12.837c-.047.037-.036.123.026.194.058.06.141.085.189.037.047-.037.036-.123-.026-.194-.058-.06-.141-.085-.189-.037zm-.392-.301c-.025.048.011.108.084.145.058.037.13.026.156-.026.025-.048-.01-.108-.083-.145-.073-.023-.131-.011-.157.026zm1.176 1.325c-.058.048-.036.16.047.23.084.086.19.097.236.038.048-.049.026-.16-.047-.231-.08-.086-.189-.097-.236-.037zm-.413-.547c-.058.037-.058.134 0 .22.058.085.156.122.203.085.058-.049.058-.145 0-.23-.051-.086-.145-.124-.203-.075z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
            <button className="social-button social-login-facebook">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="10"
                height="18"
                fill="none"
                viewBox="0 0 10 18"
              >
                <path
                  fill="#fff"
                  fillRule="evenodd"
                  d="M8.91 10.125l.467-3.258H6.459V4.753c0-.89.407-1.76 1.714-1.76H9.5V.22S8.296 0 7.145 0C4.742 0 3.171 1.56 3.171 4.385v2.482H.5v3.258h2.671V18H6.46v-7.875H8.91z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
            <button className="social-button social-login-apple">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="15"
                height="18"
                fill="none"
                viewBox="0 0 15 18"
              >
                <path
                  fill="#000"
                  fillRule="evenodd"
                  d="M12.541 9.512c-.008-1.475.654-2.588 1.993-3.408-.75-1.08-1.881-1.676-3.376-1.792-1.414-.113-2.96.832-3.526.832-.598 0-1.97-.792-3.045-.792C2.363 4.388 0 6.14 0 9.705c0 1.053.191 2.14.574 3.263.51 1.475 2.351 5.091 4.272 5.031 1.004-.024 1.714-.72 3.02-.72 1.268 0 1.925.72 3.045.72 1.937-.028 3.603-3.315 4.089-4.794-2.598-1.234-2.459-3.617-2.459-3.693zm-2.255-6.599c1.088-1.302.988-2.487.956-2.913-.96.056-2.072.659-2.706 1.402-.697.796-1.108 1.78-1.02 2.89 1.04.08 1.989-.458 2.77-1.379z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginModal
