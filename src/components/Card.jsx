import React from 'react'
import styled from 'styled-components'

import BottomNav from './BottomNav'
import CardList from './CardList'

const Card = () => {
  return (
    <StyledCard>
      <CardList />
      <BottomNav />
    </StyledCard>
  )
}

const StyledCard = styled.div`
  width: 400px;
  height: 500px;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
`

export default Card
