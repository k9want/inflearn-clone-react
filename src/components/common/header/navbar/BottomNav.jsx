import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styled, { css } from 'styled-components'
import BottomNavModal from './BottomNavModal'

function BottomNav() {
  const nav = ['/', '/courses', '/', '/roadmaps']
  const [isActive, setIsActive] = useState([false, false, true, false])
  const [isHiddenModal, setIsHiddenModal] = useState(true)

  const navigate = useNavigate()

  const handleIsActive = (i) => {
    let isActive_copy = [false, false, false, false]
    isActive_copy[i] = true
    setIsActive(isActive_copy)
    setIsHiddenModal(true)
  }

  const onClickBottomNavItem = (e, i) => {
    handleIsActive(i)
    navigate(nav[i])
  }

  const onClickMoreBottomNavItem = () => {
    setIsHiddenModal(!isHiddenModal)
  }

  return (
    <>
      {isHiddenModal ? null : (
        <BottomNavModalActiveLayout
          onClick={() => {
            setIsHiddenModal(true)
          }}
        ></BottomNavModalActiveLayout>
      )}
      <BottomNavLayout>
        <h1>bottom navbar</h1>
        {!isHiddenModal ? (
          <BottomNavModal
            setIsHiddenModal={setIsHiddenModal}
            setIsActive={setIsActive}
          />
        ) : null}

        <BottomNavList>
          <BottomNavItem
            isActive={isActive[0]}
            isHiddenModal={isHiddenModal}
            onClick={(e) => onClickBottomNavItem(e, 0)}
          >
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M12,6a1,1,0,0,0-1,1V17a1,1,0,0,0,2,0V7A1,1,0,0,0,12,6ZM7,12a1,1,0,0,0-1,1v4a1,1,0,0,0,2,0V13A1,1,0,0,0,7,12Zm10-2a1,1,0,0,0-1,1v6a1,1,0,0,0,2,0V11A1,1,0,0,0,17,10Zm2-8H5A3,3,0,0,0,2,5V19a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3V5A3,3,0,0,0,19,2Zm1,17a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V5A1,1,0,0,1,5,4H19a1,1,0,0,1,1,1Z" />
            </svg>
            <span>대시보드</span>
          </BottomNavItem>
          <BottomNavItem
            isActive={isActive[1]}
            isHiddenModal={isHiddenModal}
            onClick={(e) => onClickBottomNavItem(e, 1)}
          >
            <svg
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 60.123 60.123"
            >
              <path d="M57.124,51.893H16.92c-1.657,0-3-1.343-3-3s1.343-3,3-3h40.203c1.657,0,3,1.343,3,3S58.781,51.893,57.124,51.893z" />
              <path
                d="M57.124,33.062H16.92c-1.657,0-3-1.343-3-3s1.343-3,3-3h40.203c1.657,0,3,1.343,3,3
		C60.124,31.719,58.781,33.062,57.124,33.062z"
              />
              <path d="M57.124,14.231H16.92c-1.657,0-3-1.343-3-3s1.343-3,3-3h40.203c1.657,0,3,1.343,3,3S58.781,14.231,57.124,14.231z" />
              <circle cx="4.029" cy="11.463" r="4.029" />
              <circle cx="4.029" cy="30.062" r="4.029" />
              <circle cx="4.029" cy="48.661" r="4.029" />
            </svg>

            <span>강의</span>
          </BottomNavItem>
          <BottomNavItem
            isActive={isActive[2]}
            isHiddenModal={isHiddenModal}
            onClick={(e) => onClickBottomNavItem(e, 2)}
          >
            <svg
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 330.242 330.242"
            >
              <path
                d="M324.442,129.811l-41.321-33.677V42.275c0-6.065-4.935-11-11-11h-26c-6.065,0-11,4.935-11,11v14.737l-55.213-44.999
	c-3.994-3.254-9.258-5.047-14.822-5.047c-5.542,0-10.781,1.782-14.753,5.019L5.8,129.81c-6.567,5.351-6.173,10.012-5.354,12.314
	c0.817,2.297,3.448,6.151,11.884,6.151h19.791v154.947c0,11.058,8.972,20.053,20,20.053h62.5c10.935,0,19.5-8.809,19.5-20.053
	v-63.541c0-5.446,5.005-10.405,10.5-10.405h42c5.238,0,9.5,4.668,9.5,10.405v63.541c0,10.87,9.388,20.053,20.5,20.053h61.5
	c11.028,0,20-8.996,20-20.053V148.275h19.791c8.436,0,11.066-3.854,11.884-6.151C330.615,139.822,331.009,135.161,324.442,129.811z"
              />
            </svg>
            <span>홈</span>
          </BottomNavItem>
          <BottomNavItem
            isActive={isActive[3]}
            isHiddenModal={isHiddenModal}
            onClick={(e) => onClickBottomNavItem(e, 3)}
          >
            <svg
              width="24px"
              height="24px"
              viewBox="0 -32 576 576"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M573.19 402.67l-139.79-320C428.43 71.29 417.6 64 405.68 64h-97.59l2.45 23.16c.5 4.72-3.21 8.84-7.96 8.84h-29.16c-4.75 0-8.46-4.12-7.96-8.84L267.91 64h-97.59c-11.93 0-22.76 7.29-27.73 18.67L2.8 402.67C-6.45 423.86 8.31 448 30.54 448h196.84l10.31-97.68c.86-8.14 7.72-14.32 15.91-14.32h68.8c8.19 0 15.05 6.18 15.91 14.32L348.62 448h196.84c22.23 0 36.99-24.14 27.73-45.33zM260.4 135.16a8 8 0 0 1 7.96-7.16h39.29c4.09 0 7.53 3.09 7.96 7.16l4.6 43.58c.75 7.09-4.81 13.26-11.93 13.26h-40.54c-7.13 0-12.68-6.17-11.93-13.26l4.59-43.58zM315.64 304h-55.29c-9.5 0-16.91-8.23-15.91-17.68l5.07-48c.86-8.14 7.72-14.32 15.91-14.32h45.15c8.19 0 15.05 6.18 15.91 14.32l5.07 48c1 9.45-6.41 17.68-15.91 17.68z" />
            </svg>
            <span>로드맵</span>
          </BottomNavItem>
          <BottomNavItemMoreButton
            isHiddenModal={isHiddenModal}
            onClick={() => onClickMoreBottomNavItem()}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 30 30"
              id="i-ellipsis-horizontal"
              fill="none"
              stroke="currentcolor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5px"
            >
              <circle fill="none" cx="7" cy="16" r="2" />
              <circle fill="none" cx="16" cy="16" r="2" />
              <circle fill="none" cx="25" cy="16" r="2" />
            </svg>
            <span>더보기</span>
          </BottomNavItemMoreButton>
        </BottomNavList>
      </BottomNavLayout>
    </>
  )
}

const BottomNavModalActiveLayout = styled.div`
  display: block;
  position: fixed;
  z-index: 72;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(11, 19, 30, 0.37);

  @media screen and (min-width: 1025px) {
    display: none;
  }
`

const BottomNavLayout = styled.nav`
  display: block;
  position: fixed;
  bottom: 0;
  width: 100%;
  z-index: 74;

  & > h1 {
    display: none;
  }

  @media screen and (min-width: 1025px) {
    display: none !important;
  }
`

const BottomNavList = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 66px;
  box-shadow: 0 -2px 4px 0 rgb(33 37 41 / 8%);
  background-color: #fff;

  li:nth-child(3) {
    svg {
      fill: #fff;
      stroke: currentColor;
      stroke-width: 18px;
    }
  }

  li:nth-child(4) {
    svg {
      fill: #fff;
      stroke: currentColor;
      stroke-width: 32px;
    }
  }
`

const BottomNavItem = styled.li`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 72px;
  height: 100%;
  padding: 8px;
  padding-top: 10px;
  color: #495057;
  cursor: pointer;

  svg {
    width: 20px;
    height: 20px;
    font-size: 20px;
    line-height: 1;
    color: #495057;
  }

  span {
    font-size: 0.75rem;
    line-height: 1.5;
  }

  &:active {
    svg {
      stroke-width: 2.125px;
      color: #1dc078;
      fill: #1dc078 !important;
    }
    font-weight: 700;
    color: #1dc078;
  }

  ${(props) =>
    props.isHiddenModal &&
    props.isActive &&
    css`
      svg {
        stroke-width: 2.125px;
        color: #1dc078;
        fill: #1dc078 !important;
      }
      font-weight: 700;
      color: #1dc078;
    `}
`

const BottomNavItemMoreButton = styled.li`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 72px;
  height: 100%;
  padding: 8px;
  padding-top: 10px;
  color: #495057;
  cursor: pointer;

  svg {
    width: 20px;
    height: 20px;
    font-size: 20px;
    line-height: 1;
    color: #495057;
  }

  span {
    font-size: 0.75rem;
    line-height: 1.5;
  }

  &:active {
    svg {
      stroke-width: 2.125px;
      color: #1dc078;
      fill: #1dc078 !important;
    }
    font-weight: 700;
    color: #1dc078;
  }

  ${(props) =>
    !props.isHiddenModal &&
    css`
      svg {
        stroke-width: 2.125px;
        color: #1dc078;
        fill: #1dc078 !important;
      }
      font-weight: 700;
      color: #1dc078;
    `}
`

export default BottomNav
