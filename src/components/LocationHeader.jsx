import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'
import { useNavigate, useParams, useLocation } from 'react-router-dom'
const LocationHeader = () => {
  const { pollutionData } = useSelector(state => state.airPollution)
  const navigate = useNavigate()
  const params = useParams()

  const seletElHandler = e => {
    const station = pollutionData.filter(item => {
      return item.stationName === e.target.value
    })

    navigate(`/station/${e.target.value}`, {
      state: {
        station,
      },
    })
  }

  return (
    <StyledLocationHeader>
      <select className="station">
        <option value="인천">인천</option>
      </select>
      <select
        className="station"
        onChange={seletElHandler}
        value={params.station}
      >
        {pollutionData &&
          pollutionData.map(item => {
            return <option key={item.stationName}>{item.stationName}</option>
          })}
      </select>
    </StyledLocationHeader>
  )
}
const StyledLocationHeader = styled.div`
  height: 50px;
  border-bottom: 1px solid #808080;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #4e8df5;
  .station {
    outline: none;
    padding: 0 20px;
    box-sizing: border-box;
    font-weight: 700;
  }
`

export default LocationHeader
