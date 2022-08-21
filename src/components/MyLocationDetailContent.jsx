import React from 'react'
import styled from 'styled-components'

const MyLocationDetailContent = ({ station }) => {
  return (
    <StyledMyLocationDetailContent station={station}>
      <div className="location-header">
        <div className="location-title">
          <p className="location-title_station">{station[0].stationName}</p>
          <p className="location-title_sido">{station[0].sidoName}</p>
        </div>
      </div>
      <div className="pollution-container">
        {station[0].pm10Grade === '1' && (
          <h1 className="pollution-info">좋음</h1>
        )}
        {station[0].pm10Grade === '2' && (
          <h1 className="pollution-info">보통</h1>
        )}
        {station[0].pm10Grade === '3' && (
          <h1 className="pollution-info">한때 나쁨</h1>
        )}
        {station[0].pm10Grade === '4' && (
          <h1 className="pollution-info">나쁨</h1>
        )}
        {station[0].pm10Grade === '5' && (
          <h1 className="pollution-info">매우 나쁨</h1>
        )}
        {station[0].pm10Grade === null && (
          <h1 className="pollution-info">알 수 없음</h1>
        )}
        <div className="pollution-info-detail">
          <p>
            미세먼지 수치:
            {station[0].pm10Value === '-' ? '알 수 없음' : station[0].pm10Value}
          </p>
          <p>({station[0].dataTime} 기준)</p>
        </div>
      </div>
    </StyledMyLocationDetailContent>
  )
}

const StyledMyLocationDetailContent = styled.div`
  .location-title {
    display: flex;
    align-items: baseline;
    padding: 10px;
    box-sizing: border-box;
    .location-title_station {
      margin-right: 7px;
      font-size: 25px;
    }
  }
  .pollution-container {
    display: flex;
    align-items: center;
    flex-direction: column;
    .pollution-info {
      font-size: 25px;
      background-color: #fff;
      padding: 10px 20px;
      box-sizing: border-box;
      border-radius: 8px;
      color: ${({ theme, station }) => {
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
      margin-bottom: 15px;
    }
    .pollution-info-detail {
      text-align: center;
    }
  }
`

export default MyLocationDetailContent
