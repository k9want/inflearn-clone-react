import React from 'react'
import styled from 'styled-components'
import { CommunityWrapper } from '../CommunityBanner'
function CommunityReviewsBanner() {
  return (
    <CommunityReviewsBannerWrapper>
      <div>
        <CommunityReviewsBannerTitleBox>
          <h1>수강평</h1>
          <h3>
            <span> 총 </span>
            <strong>97,217</strong>
            <span>개, 만족도 </span>
            <strong>96.4</strong>
            <span>%</span>
          </h3>
        </CommunityReviewsBannerTitleBox>
        <p>🔥실시간으로 올라오는 진짜 수강평!🔥</p>
      </div>
    </CommunityReviewsBannerWrapper>
  )
}

const CommunityReviewsBannerWrapper = styled(CommunityWrapper)``

const CommunityReviewsBannerTitleBox = styled.div`
  display: flex;
  h3 {
    margin-left: 8px;

    span {
      font-size: 20px;
      line-height: 0.71;
      font-weight: 400;
    }

    strong {
      font-size: 20px;
      line-height: 0.71;
      font-weight: 700;
    }
  }
`

export default CommunityReviewsBanner
