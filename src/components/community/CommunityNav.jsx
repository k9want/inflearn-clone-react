import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import styled, { css } from 'styled-components'
function CommunityNav({ now }) {
  const [isNow, setIsNow] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ])

  useEffect(() => {
    let isNowCopy = [...isNow]
    isNowCopy[now] = true
    setIsNow(isNowCopy)
  }, [])
  return (
    <Wrapper>
      <h1 className="visually-hidden">community nav</h1>
      <CommunityListWrapper>
        <CommunityNavList>
          <h6>함께 공부해요</h6>
          <ul>
            <li>
              <Link to="/community/questions">
                <Span isNow={isNow[0]}>질문 & 답변</Span>
              </Link>
            </li>
            <li>
              <Link to="/community/chats">
                <Span isNow={isNow[1]}>자유주제</Span>
              </Link>
            </li>
            <li>
              <Link to="/community/studies">
                <Span isNow={isNow[2]}>스터디</Span>
              </Link>
            </li>
            <li>
              <Link to="/community/questions">
                <Span isNow={isNow[3]}>블로그</Span>
              </Link>
            </li>
          </ul>
        </CommunityNavList>
        <CommunityNavList>
          <h6>후기</h6>
          <ul>
            <li>
              <Link to="/community/reviews">
                <Span isNow={isNow[4]}>수강평</Span>
              </Link>
            </li>
            <li>
              <Link to="/community/mentorings-reviews">
                <Span isNow={isNow[5]}>멘토링 후기 </Span>
              </Link>
            </li>
          </ul>
        </CommunityNavList>
        <CommunityNavList>
          <h6>인프런</h6>
          <ul>
            <li>
              <Link to="/community/questions">
                <Span isNow={isNow[6]}>공지사항</Span>
              </Link>
            </li>
            <li>
              <Link to="/community/questions">
                <Span isNow={isNow[7]}>인프런 스토리</Span>
              </Link>
            </li>
            <li>
              <Link to="/community/questions">
                <Span isNow={isNow[8]}>인프런 소개</Span>
              </Link>
            </li>
            <li>
              <Link to="/community/questions">
                <Span isNow={isNow[9]}>강의·기능요청</Span>
              </Link>
            </li>
          </ul>
        </CommunityNavList>
      </CommunityListWrapper>
    </Wrapper>
  )
}

const Wrapper = styled.nav`
  flex: 1 0 172px;
  max-width: 172px;
  margin-right: 24px;
  @media screen and (max-width: 1024px) {
    display: none !important;
  }
`

const CommunityListWrapper = styled.ul`
  padding: 0.75rem;
  > li:first-child {
    margin-top: 0;
  }
  > li {
    margin-top: 12px;
  }
`
const CommunityNavList = styled.li`
  h6 {
    margin-bottom: 1em;
    height: 20px;
    font-size: 12px;
    line-height: 1.5;
    font-weight: 500;
    color: #adb5bd;
  }

  li {
    padding: 0.5em 0.75em;

    &:hover {
      opacity: 0.7;
    }
  }
`

const Span = styled.span`
  font-size: 16px;
  line-height: 1.5;

  ${(props) =>
    props.isNow &&
    css`
      color: #00c471;
      font-weight: 700;
    `}
`

export default CommunityNav
