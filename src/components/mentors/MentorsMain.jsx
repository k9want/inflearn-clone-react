import React from 'react'
import { useState } from 'react'
import styled from 'styled-components'
import MentorsMainCardList from './MentorsMainCardList'
import MentorsMainHeader from './MentorsMainHeader'
import MentorsMainLeft from './MentorsMainLeft'

function MentorsMain() {
  const [isHidden, setIsHidden] = useState(true)

  return (
    <MentorsMainWrapper>
      <MentorsMainHeader setIsHidden={setIsHidden} />
      <MentorsMainPanel>
        <MentorsMainLeft isHidden={isHidden} setIsHidden={setIsHidden} />
        <MentorsMainCardList />
      </MentorsMainPanel>
    </MentorsMainWrapper>
  )
}

const MentorsMainWrapper = styled.main`
  display: flex;
  max-width: 1200px;
  margin: auto;
  margin-top: 32px;
  padding: 0 2rem;
  flex-direction: column;

  @media screen and (max-width: 1024px) {
    margin-top: 0;
    padding: 0 1rem;
  }

  @media screen and (max-width: 768px) {
    padding: 0 0.75rem;
  }
`
const MentorsMainPanel = styled.div`
  display: flex;
`
export default MentorsMain
