import React from 'react'
import styled from 'styled-components'
import MentorsMainCardList from './MentorsMainCardList'
import MentorsMainLeft from './MentorsMainLeft'

const MentorsMainWrapper = styled.main`
  display: flex;
  max-width: 1200px;
  margin: auto;
  margin-top: 32px;
  padding: 0 2rem;
`

function MentorsMain() {
  return (
    <MentorsMainWrapper>
      <MentorsMainLeft />
      <MentorsMainCardList />
    </MentorsMainWrapper>
  )
}

export default MentorsMain
