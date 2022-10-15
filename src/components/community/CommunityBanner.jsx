import React from 'react'
import styled from 'styled-components'

function CommunityBanner() {
  return (
    <CommunityWrapper>
      <div>
        <h1>묻고 답해요</h1>
        <p>97만명의 커뮤니티!! 함께 토론해봐요.</p>
      </div>
    </CommunityWrapper>
  )
}

const CommunityWrapper = styled.div`
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
`

export default CommunityBanner
