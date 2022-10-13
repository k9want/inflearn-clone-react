import React from 'react'
import styled from 'styled-components'
const Wrapper = styled.a`
  display: block;
  cursor: pointer;
  height: 100%;
  background-color: #b9f1f1;
`

const MentorBanner = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background-image: url(https://cdn.inflearn.com/public/mentors/mentors_banner_w.png);
  background-position: calc(100% + 80px) 30%;
  background-repeat: no-repeat;
`

const Container = styled.div`
  position: relative;
  padding: 31px 2rem 38px;
  margin: auto;
  max-width: 1200px;
`
const Info = styled.div`
  h3 {
    font-size: 26px;
    font-weight: 700;
    line-height: 1.5;
    color: #1b1c1d;
    letter-spacing: -0.3px;
  }
  p {
    font-weight: 400;
    line-height: 1.47;
    letter-spacing: -0.3px;
    font-size: 15px;
    color: #1b1c1d;
  }

  span {
    line-height: 1.5;
    letter-spacing: -0.3px;
    font-size: 16px;
    font-weight: 700;
    display: flex;
    align-items: center;
    margin-top: 10px;
    -webkit-text-decoration-line: underline;
    text-decoration-line: underline;
    text-decoration-thickness: 2px;
    color: #175cbe;
  }

  svg {
    margin-left: 4px;
    width: 20px;
    height: 20px;
    fill: #175cbe;
  }
`

function MentorsBanner() {
  return (
    <Wrapper href="/mentors">
      <Container>
        <Info>
          <h3>멘토링</h3>
          <p>
            업계 선배들 혹은 동료들과 인사이트를 나눠 보세요. <br />더 빨리, 더
            멀리 갈 수 있어요.
          </p>
          <span>
            멘토 지원하기{' '}
            <svg
              height="16"
              viewBox="0 0 16 16"
              width="16"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                clip-rule="evenodd"
                d="m6.22 3.22c.293-.293.767-.293 1.06 0l4.25 4.25c.293.293.293.767 0 1.06l-4.25 4.25c-.293.293-.767.293-1.06 0s-.293-.767 0-1.06l3.72-3.72-3.72-3.72c-.293-.293-.293-.767 0-1.06z"
                fill-rule="evenodd"
              ></path>
            </svg>
          </span>
        </Info>
        <MentorBanner />
      </Container>
    </Wrapper>
  )
}

export default MentorsBanner
