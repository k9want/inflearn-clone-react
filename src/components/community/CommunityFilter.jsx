import React from 'react'
import { useState } from 'react'
import styled, { css } from 'styled-components'
function CommunityFilter({ filter }) {
  const [isActiveFilter, setIsActiveFilter] = useState([true, false, false])

  const onClickFilterItem = (i) => {
    let isActiveFilterCopy = [false, false, false]
    isActiveFilterCopy[i] = true
    setIsActiveFilter(isActiveFilterCopy)
  }

  return (
    <CommunityFilterList>
      {filter.map((ft, i) => {
        return (
          <CommunityFilterItem
            key={i}
            isActive={isActiveFilter[i]}
            onClick={() => onClickFilterItem(i)}
          >
            <button>{ft}</button>
          </CommunityFilterItem>
        )
      })}
    </CommunityFilterList>
  )
}

const CommunityFilterList = styled.ul`
  display: flex;
  border-bottom: 1px solid #dee2e6;
`

const CommunityFilterItem = styled.li`
  position: relative;

  button {
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    height: 45px;
    padding: 0 12px;
    color: #abb0b5;
    font-weight: 500;
    &:hover {
      color: #868e96;
    }

    ${(props) =>
      props.isActive &&
      css`
        top: 1px;
        color: #1b1c1d;
        font-weight: 700;
        border-bottom: 2px solid #1b1c1d;

        &:hover {
          color: #1b1c1d;
        }
      `}
  }
`

export default CommunityFilter
