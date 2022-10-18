import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import styled, { css } from 'styled-components'
function CommunityPagination({ page }) {
  const [pageButton, setPageButton] = useState([])

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

  useEffect(() => {
    let tmpPageButton = []
    page.map(() => {
      tmpPageButton.push(false)
    })
    tmpPageButton[0] = true
    setPageButton(tmpPageButton)
  }, [])

  return (
    <CommunityPaginationLayout>
      {!pageButton[0] ? (
        <CommunityPaginationButton>이전 페이지</CommunityPaginationButton>
      ) : (
        <button></button>
      )}
      <CommunityPaginationNav>
        <h1 className="visually-hidden">Community Pagination</h1>

        <CommunityPaginationList>
          {page.map((p, i) => {
            return (
              <CommunityPaginationItem
                key={i}
                isActive={pageButton[i]}
                onClick={() => onClickPageButton(i)}
              >
                <button>{p}</button>
              </CommunityPaginationItem>
            )
          })}
        </CommunityPaginationList>
      </CommunityPaginationNav>
      {!pageButton[page.length - 1] ? (
        <CommunityPaginationButton>다음 페이지</CommunityPaginationButton>
      ) : (
        <button></button>
      )}
    </CommunityPaginationLayout>
  )
}

const CommunityPaginationLayout = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const CommunityPaginationNav = styled.nav`
  display: flex;
  align-items: center;
`

const CommunityPaginationList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 1;
  flex-grow: 1;
  order: 2;
`

const CommunityPaginationItem = styled.li`
  button {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-size: 0.75rem;
    line-height: 1.5;
    position: relative;
    vertical-align: top;
    margin: 0.25rem;
    padding: 3.5px 6px;
    text-align: center;
    -webkit-appearance: none;
    border: 1px solid #dbdbdb;
    border-radius: 4px;
    box-shadow: none;
    color: #363636;
    min-width: 2.25em;

    &:hover {
      border-color: #b5b5b5;
      color: #363636;
    }

    &:focus-within {
      border-color: #3273dc;
    }

    ${(props) =>
      props.isActive &&
      css`
        background-color: #1dc078;
        border-color: #1dc078;
        color: #fff;

        &:hover {
          background-color: #1dc078;
          border-color: #1dc078;
          color: #fff;
        }
      `}
  }
`

const CommunityPaginationButton = styled.button`
  flex-grow: 0;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 0.75rem;
  line-height: 1.5;
  position: relative;
  vertical-align: top;
  margin: 0.25rem;
  padding: 3.5px 9px;
  text-align: center;
  -webkit-appearance: none;
  border: 1px solid #dbdbdb;
  border-radius: 4px;
  box-shadow: none;
  color: #363636;
  min-width: 2.25em;
  white-space: nowrap;

  &:hover {
    border-color: #b5b5b5;
    color: #363636;
  }

  &:focus-within {
    border-color: #3273dc;
  }
`
export default CommunityPagination
