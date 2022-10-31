import React, { useState } from 'react'
import styled, { css } from 'styled-components'
import { Select, SelectWrapper } from '../mentors/MentorsMainLeft'

function CommunityOrder({ order, now }) {
  const optionValue = ['recent', 'score', 'comment', 'recommend']
  const [isActiveOrder, setIsActiveOrder] = useState([
    true,
    false,
    false,
    false,
  ])

  const onClickOrderItem = (i) => {
    let isActiveOrderCopy = [false, false, false, false]
    isActiveOrderCopy[i] = true
    setIsActiveOrder(isActiveOrderCopy)
  }

  return (
    <CommunityOrderBox>
      <CommunityOrderList>
        {order.map((ord, i) => {
          return (
            <CommunityOrderItem
              key={i}
              isActive={isActiveOrder[i]}
              onClick={() => onClickOrderItem(i)}
            >
              <button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M8 10c-1.105 0-2-.895-2-2s.895-2 2-2 2 .895 2 2-.895 2-2 2z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                {ord}
              </button>
            </CommunityOrderItem>
          )
        })}
      </CommunityOrderList>
      <CommunityOrderSelectWrapper>
        <CommunityOrderSelect name="order">
          {order.map((ord, i) => {
            return (
              <option
                value={optionValue[i]}
                key={i}
                isActive={isActiveOrder[i]}
                onClick={() => onClickOrderItem(i)}
              >
                {ord}
              </option>
            )
          })}
        </CommunityOrderSelect>
      </CommunityOrderSelectWrapper>
      <div>
        {now === 2 ? (
          <CommunityStudiesButton
            href="https://www.notion.so/1-0-a73896153c484a38a1749dfd76f46094"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              width="16"
              xmlns="http://www.w3.org/2000/svg"
              height="16"
              viewBox="0 0 16 16"
            >
              <path
                fill="#495057"
                fillRule="evenodd"
                d="M8 1.5C4.41 1.5 1.5 4.41 1.5 8s2.91 6.5 6.5 6.5 6.5-2.91 6.5-6.5S11.59 1.5 8 1.5zM0 8c0-4.418 3.582-8 8-8s8 3.582 8 8-3.582 8-8 8-8-3.582-8-8zm9 3c0 .552-.448 1-1 1s-1-.448-1-1 .448-1 1-1 1 .448 1 1zM6.92 6.085c.081-.16.19-.299.34-.398.145-.097.371-.187.74-.187.28 0 .553.087.738.225.164.123.262.285.262.525 0 .177-.04.264-.077.318-.046.068-.124.144-.277.245-.076.051-.158.1-.258.161l-.007.004c-.093.056-.204.122-.313.195-.222.148-.487.354-.692.661-.23.345-.137.81.208 1.04.345.23.81.137 1.04-.208.045-.068.124-.143.276-.245.077-.051.159-.1.26-.16l.006-.004c.093-.057.204-.123.313-.195.222-.149.487-.355.692-.662.214-.32.329-.702.329-1.15 0-.76-.36-1.348-.863-1.725C9.155 4.163 8.554 4 8 4c-.631 0-1.155.16-1.572.438-.413.276-.68.638-.849.977-.185.37-.035.82.336 1.006.37.185.82.035 1.006-.336z"
                clipRule="evenodd"
              ></path>
            </svg>
            <span>스터디 가이드</span>
          </CommunityStudiesButton>
        ) : null}
        <CommunityOrderButton>
          <svg
            width="16"
            height="16"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
          >
            <path
              fill="#ffffff"
              fillRule="evenodd"
              d="M11.508 1.451c.456-.455 1.195-.455 1.65 0l1.724 1.724c.456.456.456 1.194 0 1.65L13.02 6.687l-.008.008-7.219 6.89c-.132.126-.291.22-.466.273l-3.681 1.12c-.177.054-.369.006-.5-.124-.13-.131-.178-.323-.124-.5l1.115-3.666c.059-.192.166-.365.311-.504L9.651 3.31l1.857-1.858zM9.992 4.366l-6.854 6.542c-.02.02-.036.044-.044.072l-.843 2.769 2.785-.848c.025-.007.048-.02.067-.039l6.848-6.537-1.96-1.96zm2.675 1.26l1.508-1.508c.065-.065.065-.17 0-.236l-1.724-1.724c-.065-.065-.17-.065-.236 0l-1.508 1.509 1.96 1.96z"
              clipRule="evenodd"
            ></path>
          </svg>
          <span>글쓰기</span>
        </CommunityOrderButton>
      </div>
    </CommunityOrderBox>
  )
}

const CommunityOrderBox = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 8px;
  border-bottom: 1px solid #dee2e6;
`

const CommunityOrderList = styled.ul`
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`

const CommunityOrderItem = styled.li`
  button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    line-height: 1.43;
    font-size: 14px;
    letter-spacing: -0.3px;
    font-weight: 500;
    height: 28px;
    padding: 0 6px;
    cursor: pointer;
    color: #abb0b5;
    :hover {
      color: #868e96;
    }

    svg {
      fill: #868e96;
    }

    ${(props) =>
      props.isActive &&
      css`
        font-weight: 700;
        color: #1b1c1d;
        svg {
          fill: #00c471;
        }
        :hover {
          color: #1b1c1d;
        }
      `}
  }
`
const CommunityOrderSelectWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const CommunityOrderSelect = styled(Select)`
  display: none;
  border: none;
  font-size: 14px;
  color: #616568;
  font-weight: 500;
  padding-right: 19px;

  &:focus-within {
    box-shadow: none;
  }

  option {
    font-size: 14px;
  }

  @media screen and (max-width: 768px) {
    display: block;
  }
`

const CommunityOrderButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-weight: 500;
  border-radius: 4px;
  cursor: pointer;
  -webkit-appearance: none;
  color: #fff;
  border: 1px solid #868e96;
  margin-left: 8px;
  background-color: #3e4042;
  padding: 0 12px;
  height: 40px;
  line-height: 1.43;
  font-size: 14px;
  letter-spacing: -0.3px;

  svg {
    margin-right: 8px;
  }

  @media screen and (max-width: 768px) {
    svg {
      margin-right: 0;
    }
    span {
      display: none;
    }
  }
`

const CommunityStudiesButton = styled(CommunityOrderButton)`
  background-color: #fff;
  color: #495057;
  border-color: #d5dbe2;
`

export default CommunityOrder
