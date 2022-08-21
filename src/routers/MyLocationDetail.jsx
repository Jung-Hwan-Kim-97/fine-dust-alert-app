import React from 'react'
import styled from 'styled-components'
import { useLocation } from 'react-router-dom'
import MyLocationDetailContent from '../components/MyLocationDetailContent'
const MyLocationDetail = () => {
  const location = useLocation()
  const { station } = location.state

  return (
    <StyledMyLocationDetail station={station}>
      {station && <MyLocationDetailContent station={station} />}
    </StyledMyLocationDetail>
  )
}

const StyledMyLocationDetail = styled.section`
  margin: auto;
  width: 80%;
  height: 150px;
  background-color: ${({ theme, station }) => {
    if (station[0].pm10Grade === '1') {
      return theme.palett.pm10Grade1
    } else if (station[0].pm10Grade === '2') {
      return theme.palett.pm10Grade2
    } else if (station[0].pm10Grade === '3') {
      return theme.palett.pm10Grade3
    } else if (station[0].pm10Grade === '4') {
      return theme.palett.pm10Grade4
    } else if (station[0].pm10Grade === '5') {
      return theme.palett.pm10Grade5
    } else {
      return theme.palett.pm10GradeNull
    }
  }};
  margin-top: 10px;
  border-radius: 10px;
  color: #fff;
`

export default MyLocationDetail
