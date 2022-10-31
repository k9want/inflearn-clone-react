import React from 'react'
import styled from 'styled-components'
import CommunityFilter from './CommunityFilter'
import CommunityForm from './CommunityForm'
import CommunityArticles from './CommunityArticles'
import CommunityNav from './CommunityNav'
import CommunityOrder from './CommunityOrder'
import CommunityTags from './CommunityTags'
import CommunityPagination from './CommunityPagination'

function CommunityMain({ navNow, data, filter, formPlaceholder, order, page }) {
  return (
    <CommunityLayout>
      <CommunityNav now={navNow} />
      <CommunityMainSection>
        <h3 className="visually-hidden">Community Main</h3>
        {filter && filter.length > 1 ? (
          <CommunityFilter filter={filter} />
        ) : null}
        <CommunityForm formPlaceholder={formPlaceholder} />
        <CommunityOrder order={order} now={navNow} />
        <CommunityArticles data={data} now={navNow} />
        <CommunityPagination page={page} />
      </CommunityMainSection>
      <CommunityTags data={data} />
    </CommunityLayout>
  )
}

export const CommunityLayout = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0 auto;
  max-width: 1160px;
`

const CommunityMainSection = styled.main`
  padding: 32px 0 64px;
  max-width: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 1024px) {
    padding: 32px 32px 64px;
  }

  @media screen and (max-width: 768px) {
    padding: 24px 18px 48px;
  }
`

export default CommunityMain
