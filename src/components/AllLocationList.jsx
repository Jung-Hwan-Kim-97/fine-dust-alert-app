import React from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'
import AllLocationDetailItem from './AllLocationDetailItem'

const AllLocationList = () => {
  const { pollutionData } = useSelector(state => state.airPollution)

  return (
    <StyledAllLocationList>
      {pollutionData &&
        pollutionData.map(item => {
          return <AllLocationDetailItem item={item} key={item.stationName} />
        })}
    </StyledAllLocationList>
  )
}

const StyledAllLocationList = styled.div``

export default AllLocationList
