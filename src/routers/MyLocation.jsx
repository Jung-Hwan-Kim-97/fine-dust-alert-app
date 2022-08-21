import React, { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import LocationHeader from '../components/LocationHeader'

const MyLocation = () => {
  const { pollutionData } = useSelector(state => state.airPollution)
  const navigate = useNavigate()

  useEffect(() => {
    const station = pollutionData.filter(item => {
      return item.stationName === '부평'
    })
    navigate('/station/부평', {
      state: {
        station,
      },
    })
  }, [])

  return (
    <StyledMyLocation>
      <LocationHeader />
      <Outlet />
    </StyledMyLocation>
  )
}

const StyledMyLocation = styled.div``

export default MyLocation
