import React from 'react'
import { useState } from 'react'
import styled, { css } from 'styled-components'
import MentorsCard from './MentorsCard'
import { MentorsDummy } from './MentorsDummy'

function MentorsMainCardList() {
  const [pageButton, setPageButton] = useState([
    true,
    false,
    false,
    false,
    false,
    false,
  ])

  function onClickPageButton(i) {
    let pageButtonCopy = [...pageButton]
    const now = pageButton.indexOf(true)
    pageButtonCopy[now] = false
    pageButtonCopy[i] = true
    setPageButton(pageButtonCopy)
  }

  function onClickBeforeButton() {
    let pageButtonCopy = [...pageButton]
    const now = pageButton.indexOf(true)
    pageButtonCopy[now] = false
    pageButtonCopy[now - 1] = true
    setPageButton(pageButtonCopy)
  }

  function onClickNextButton() {
    let pageButtonCopy = [...pageButton]
    const now = pageButton.indexOf(true)
    pageButtonCopy[now] = false
    pageButtonCopy[now + 1] = true
    setPageButton(pageButtonCopy)
  }

  return (
    <MentorsMainCardListWrapper>
      <div>
        {MentorsDummy.result.map((data) => {
          return <MentorsCard data={data} key={data.id} />
        })}
      </div>
      <MentorsMainPagination>
        <ul>
          {!pageButton[0] ? (
            <MentorMainPageButton onClick={() => onClickBeforeButton()}>
              이전
            </MentorMainPageButton>
          ) : null}

          {pageButton.map((now, i) => {
            return (
              <li key={i}>
                <MentorMainPageButton
                  now={now}
                  onClick={() => onClickPageButton(i)}
                >
                  {i + 1}
                </MentorMainPageButton>
              </li>
            )
          })}

          {!pageButton[pageButton.length - 1] ? (
            <MentorMainPageButton
              style={{ marginLeft: '9px' }}
              onClick={() => onClickNextButton()}
            >
              다음
            </MentorMainPageButton>
          ) : null}
        </ul>
      </MentorsMainPagination>
    </MentorsMainCardListWrapper>
  )
}

const MentorsMainCardListWrapper = styled.div`
  width: 100%;
  padding-left: 16px;

  > div {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 16px;
  }
`

const MentorsMainPagination = styled.nav`
  width: 100%;
  margin-bottom: 80px;

  ul {
    display: flex;
    width: 100%;
    justify-content: center;
    padding: 18px;

    li {
      margin-left: 9px;
    }
  }
  ul:last-child {
    margin-right: 9px;
  }
`

const MentorMainPageButton = styled.button`
  padding: 5px 9px;
  border-radius: 3px;
  border: 1px solid #dedede;
  cursor: pointer;
  color: #595959;
  line-height: 1;
  font-size: 1rem;
  background-color: #f0f0f0;

  ${(props) =>
    props.now &&
    css`
      background-color: #1dc078;
      border: 1px solid #1dc078;
      color: #fff;
    `}
`

export default MentorsMainCardList
