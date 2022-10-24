import React from 'react'
import { useState } from 'react'
import styled, { css } from 'styled-components'
import selectDownSrc from '../../assets/images/index/select-down.png'

function MentorsMainLeft() {
  const [isCheck, setIsCheck] = useState([
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

  function onClickCheckBox(e, i) {
    e.preventDefault()
    let isCheckCopy = [...isCheck]
    isCheckCopy[i] = !isCheck[i]
    setIsCheck(isCheckCopy)
  }

  return (
    <Wrapper className="lg-only">
      <InputWrapper>
        <input type="text" />
        <button type="button">검색</button>
      </InputWrapper>

      <SelectWrapper>
        <Select name="order">
          <option value="common">기본순</option>
          <option value="latest">최근신청순</option>
          <option value="recent">신규멘토순</option>
          <option value="count">인기순</option>
        </Select>
      </SelectWrapper>

      <NavWrapper>
        <NavToggle>분야별</NavToggle>
        <NavList>
          <NavCheckBox
            isCheck={isCheck[0]}
            onClick={(e) => onClickCheckBox(e, 0)}
          >
            <input type="checkbox" id="term1" className="visually-hidden" />
            <label htmlFor="term1">개발 · 프로그래밍</label>
          </NavCheckBox>
          <NavCheckBox
            isCheck={isCheck[1]}
            onClick={(e) => onClickCheckBox(e, 1)}
          >
            <input type="checkbox" id="term2" className="visually-hidden" />
            <label htmlFor="term2">보안 · 네트워크</label>
          </NavCheckBox>
          <NavCheckBox
            isCheck={isCheck[2]}
            onClick={(e) => onClickCheckBox(e, 2)}
          >
            <input type="checkbox" id="term3" className="visually-hidden" />
            <label htmlFor="term3">데이터 사이언스</label>
          </NavCheckBox>
          <NavCheckBox
            isCheck={isCheck[3]}
            onClick={(e) => onClickCheckBox(e, 3)}
          >
            <input type="checkbox" id="term4" className="visually-hidden" />
            <label htmlFor="term4">게임 개발</label>
          </NavCheckBox>
          <NavCheckBox
            isCheck={isCheck[4]}
            onClick={(e) => onClickCheckBox(e, 4)}
          >
            <input type="checkbox" id="term5" className="visually-hidden" />
            <label htmlFor="term5">크리에이티브</label>
          </NavCheckBox>
          <NavCheckBox
            isCheck={isCheck[5]}
            onClick={(e) => onClickCheckBox(e, 5)}
          >
            <input type="checkbox" id="term6" className="visually-hidden" />
            <label htmlFor="term6">직무 · 마케팅</label>
          </NavCheckBox>
          <NavCheckBox
            isCheck={isCheck[6]}
            onClick={(e) => onClickCheckBox(e, 6)}
          >
            <input type="checkbox" id="term7" className="visually-hidden" />
            <label htmlFor="term7">학문 · 외국어</label>
          </NavCheckBox>
          <NavCheckBox
            isCheck={isCheck[7]}
            onClick={(e) => onClickCheckBox(e, 7)}
          >
            <input type="checkbox" id="term8" className="visually-hidden" />
            <label htmlFor="term8">커리어</label>
          </NavCheckBox>
          <NavCheckBox
            isCheck={isCheck[8]}
            onClick={(e) => onClickCheckBox(e, 8)}
          >
            <input type="checkbox" id="term9" className="visually-hidden" />
            <label htmlFor="term9">교양</label>
          </NavCheckBox>
        </NavList>
      </NavWrapper>

      <FilterReset href="/mentors">
        <i className="ic-sync"></i>
        &nbsp;&nbsp; 필터 초기화
      </FilterReset>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  min-width: 180px;
  width: 180px;
  position: sticky;
  top: 84px;
  text-align: left;
  height: 100%;
`

const InputWrapper = styled.div`
  display: flex;
  background: #fff;

  input {
    width: 100%;
    max-width: 100%;
    padding: 5px 9px;
    height: 44px;
    border: 1px solid #e4e4e4;
    border-radius: 3px;
    border-bottom-right-radius: 0;
    border-top-right-radius: 0;
    :focus {
      outline: 0.04rem auto #1dc078;
      border-color: #1dc078;
      box-shadow: 0 0 0 0.125em rgba(29, 192, 120, 0.25);
    }
  }

  button {
    border-width: 1px;
    color: #363636;
    cursor: pointer;
    justify-content: center;
    padding: calc(0.375em - 1px) 0.75em;
    text-align: center;
    white-space: nowrap;
    background-color: #f5f5f5;
    border: 1px solid #e4e4e4;
    border-left: 0;
    border-radius: 4px;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;

    :focus {
      box-shadow: 0 0 0 0.2em rgba(29, 192, 120, 0.25);
    }
  }
`

const SelectWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 44px;
  margin-top: 16px;

  select {
    background: url(${selectDownSrc}) no-repeat 90% 50%/11px auto;

    ::-ms-expand {
      display: none;
    }
    -o-appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
  }
`

const Select = styled.select`
  display: block;
  height: 100%;
  color: #333;
  font-weight: 400;
  width: 100%;
  border: 1px solid #e4e4e4;
  border-radius: 4px;
  background: #fff;
  padding: 5px 40px 5px 9px;
  :focus-within {
    box-shadow: 0 0 0 0.125em rgba(29, 192, 120, 0.25);
    border-radius: 4px;
  }
`

const NavWrapper = styled.div`
  margin-top: 24px;
  border: 1px solid #dedede;
  border-radius: 4px;
`

const NavToggle = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: flex-start;
  font-weight: 700;
  color: #595959;
  width: 100%;
  height: 50px;
  padding: 14px 24px;
  border: 0;
  border-bottom: 1px solid #e4e4e4;
  background: #f5f5f5;
  cursor: pointer;

  ::after {
    content: '';
    margin-top: 2px;
    margin-left: 0.65rem;
    display: inline-block;
    border: solid #595959;
    border-width: 0 2px 2px 0;
    padding: 2.5px;
    transform: rotate(45deg);
    transition: transform 0.2s;
  }
`

const NavList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  display: block;
  font-size: 1rem;
  background-color: #fff;
  padding: 0.875rem;
  border-radius: 4px;
  margin-bottom: 0;
`

const NavCheckBox = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 35px;
  padding-left: 1.5rem;
  background-color: #fff;
  border: 0;
  cursor: pointer;

  label {
    display: inline-flex;
    align-items: center;
    justify-content: flex-start;
    position: relative;
    font-size: 1rem;
    color: #787878;
    cursor: pointer;

    ::before {
      box-sizing: border-box;
      content: '';
      display: block;
      position: absolute;
      top: 5px;
      left: -20px;
      height: 15px;
      width: 15px;
      border: 1px solid #d2d2d2;
      border-radius: 0;

      ${(props) =>
        props.isCheck &&
        css`
          background: #494949;
          border: 2px solid #1dc078;
          border-radius: 4px;
        `}
    }

    ::after {
      content: 'ㄴ';
      position: absolute;
      display: block;
      top: 0;
      left: -22px;
      height: 15px;
      font-size: 0.85rem;
      color: #fff;
      transform: rotate(-45deg);
    }
  }
`

const FilterReset = styled.a`
  display: inline-block;
  background: none;
  border: 0;
  font-size: 12px;
  padding: 0;
  font-weight: 800;
  cursor: pointer;
  margin: 18px 0 80px;

  :hover {
    color: #454545;
  }
`

export default MentorsMainLeft
