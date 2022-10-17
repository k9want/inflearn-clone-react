import React from 'react'
import styled from 'styled-components'

function CommunityTags({ data }) {
  return (
    <CommunityTagsLayout>
      <CommunityTagsBox>
        <CommunityTagsTitle>인기 태그</CommunityTagsTitle>
        <CommunityTagsList>
          {data.result.tags.map((tag, i) => {
            return (
              <CommunityTagsItem key={i}>
                <button>
                  <span>#&nbsp;</span>
                  <span>{tag}</span>
                </button>
              </CommunityTagsItem>
            )
          })}
        </CommunityTagsList>
      </CommunityTagsBox>
    </CommunityTagsLayout>
  )
}

const CommunityTagsLayout = styled.div`
  flex: 1 0 196px;
  margin-left: 40px;
  max-width: 196px;
`
const CommunityTagsBox = styled.div`
  margin-top: 32px;
  padding: 16px 8px 16px 12px;
  border: 1px solid #dee2e6;
  background-color: #fff;
  border-radius: 4px;
`

const CommunityTagsTitle = styled.h6`
  margin-bottom: 16px;
  height: 20px;
  line-height: 1.43;
  font-size: 14px;
  font-weight: 500;
  color: #616568;
  letter-spacing: -0.3px;
`

const CommunityTagsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
`

export const CommunityTagsItem = styled.li`
  margin: 0 4px 10px 0;

  &:hover {
    opacity: 0.7;
  }

  button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: fit-content;
    width: -webkit-fit-content;
    width: -moz-fit-content;
    height: 26px;
    line-height: 1.38;
    font-size: 13px;
    letter-spacing: -0.3px;
    font-weight: 500;
    color: #3e4042;
    padding: 4px 8px;
    border: none;
    border-radius: 4px;
    white-space: nowrap;
    background-color: #eff3fa;
    cursor: pointer;

    span {
      white-space: nowrap;
      color: #3e4042;
      background-color: #f1f3f5;
      line-height: 1.38;
      font-size: 13px;
    }

    span:last-child {
      margin-bottom: 1px;
    }
  }
`

export default CommunityTags
