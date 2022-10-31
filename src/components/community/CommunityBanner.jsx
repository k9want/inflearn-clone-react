import React from 'react'
import styled from 'styled-components'

function CommunityBanner({ banner }) {
  return (
    <CommunityWrapper>
      <div>
        <h1>{banner.title}</h1>
        <p>{banner.description}</p>
      </div>
    </CommunityWrapper>
  )
}

export const CommunityWrapper = styled.div`
  padding: 24px 0;
  width: 100%;
  background-color: #333b3d;

  div {
    margin: 0 auto;
    max-width: 1160px;
    color: #fff;

    h1 {
      height: 20px;
      font-size: 24px;
      font-weight: 700;
      line-height: 0.71;
      color: #fff;
      margin-bottom: 12px;
    }

    p {
      line-height: normal;
    }
  }

  @media screen and (max-width: 1024px) {
    padding: 24px 32px;
  }

  @media screen and (max-width: 768px) {
    div {
      h1 {
        font-size: 20px;
      }

      p {
        font-size: 14px;
      }
    }
  }
`

export default CommunityBanner
