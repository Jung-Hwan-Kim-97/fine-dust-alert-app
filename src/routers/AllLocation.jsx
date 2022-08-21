import React from 'react'
import styled from 'styled-components'
import AllLocationHeader from '../components/AllLocationHeader'
import AllLocationList from '../components/AllLocationList'
const AllLocation = () => {
  return (
    <StyledAllLocation>
      <AllLocationHeader />
      <AllLocationList />
    </StyledAllLocation>
  )
}

const StyledAllLocation = styled.div``

export default AllLocation
