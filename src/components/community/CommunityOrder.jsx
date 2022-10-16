import React, { useState } from 'react'
import styled, { css } from 'styled-components'

function CommunityOrder({ order }) {
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
                    clip-rule="evenodd"
                  ></path>
                </svg>
                {ord}
              </button>
            </CommunityOrderItem>
          )
        })}
      </CommunityOrderList>
      <CommunityOrderButton>
        <svg
          width="16"
          height="16"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
        >
          <path
            fill="#ffffff"
            fill-rule="evenodd"
            d="M11.508 1.451c.456-.455 1.195-.455 1.65 0l1.724 1.724c.456.456.456 1.194 0 1.65L13.02 6.687l-.008.008-7.219 6.89c-.132.126-.291.22-.466.273l-3.681 1.12c-.177.054-.369.006-.5-.124-.13-.131-.178-.323-.124-.5l1.115-3.666c.059-.192.166-.365.311-.504L9.651 3.31l1.857-1.858zM9.992 4.366l-6.854 6.542c-.02.02-.036.044-.044.072l-.843 2.769 2.785-.848c.025-.007.048-.02.067-.039l6.848-6.537-1.96-1.96zm2.675 1.26l1.508-1.508c.065-.065.065-.17 0-.236l-1.724-1.724c-.065-.065-.17-.065-.236 0l-1.508 1.509 1.96 1.96z"
            clip-rule="evenodd"
          ></path>
        </svg>
        글쓰기
      </CommunityOrderButton>
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
`

export default CommunityOrder
