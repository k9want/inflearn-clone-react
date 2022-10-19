import React from 'react'
import styled from 'styled-components'
import CommunityFilter from '../CommunityFilter'
import CommunityForm from '../CommunityForm'
import CommunityArticles from '../CommunityArticles'
import CommunityNav from '../CommunityNav'
import CommunityOrder from '../CommunityOrder'
import CommunityTags from '../CommunityTags'
import CommunityPagination from '../CommunityPagination'

function QuestionsMain({ data }) {
  const filter = ['전체', '미해결', '해결됨']
  const order = ['최신순', '정확도순', '답변많은순', '좋아요순']
  const page = [1, 2, 3, 4, 5, 6, 7, 8, 9]

  return (
    <CommunityLayout>
      <CommunityNav now={0} />
      <CommunityMain>
        <h3 className="visually-hidden">Community Question Main</h3>
        <CommunityFilter filter={filter} />
        <CommunityForm />
        <CommunityOrder order={order} />
        <CommunityArticles data={data} />
        <CommunityPagination page={page} />
      </CommunityMain>
      <CommunityTags data={data} />
    </CommunityLayout>
  )
}

const CommunityLayout = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0 auto;
  max-width: 1160px;
`

const CommunityMain = styled.main`
  padding: 32px 0 64px;
  max-width: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
`

export default QuestionsMain
