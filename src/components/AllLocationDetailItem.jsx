import React from 'react'
import styled from 'styled-components'
import AllLocationFavoriteIcon from './AllLocationFavoriteIcon'

const AllLocationDetailItem = ({ item }) => {
  return (
    <StyledAllLocationDetailItem item={item}>
      <div className="location-header">
        <div className="location-title">
          <p className="location-title_station">{item.stationName}</p>
          <p className="location-title_sido">{item.sidoName}</p>
        </div>
        <AllLocationFavoriteIcon item={item} />
      </div>
      <div className="pollution-container">
        {item.pm10Grade === '1' && <h1 className="pollution-info">좋음</h1>}
        {item.pm10Grade === '2' && <h1 className="pollution-info">보통</h1>}
        {item.pm10Grade === '3' && (
          <h1 className="pollution-info">한때 나쁨</h1>
        )}
        {item.pm10Grade === '4' && <h1 className="pollution-info">나쁨</h1>}
        {item.pm10Grade === '5' && (
          <h1 className="pollution-info">매우 나쁨</h1>
        )}
        {item.pm10Grade === null && (
          <h1 className="pollution-info">알 수 없음</h1>
        )}
        <div className="pollution-info-detail">
          <p>
            미세먼지 수치:
            {item.pm10Value === '-' ? '알 수 없음' : item.pm10Value}
          </p>
          <p>({item.dataTime} 기준)</p>
        </div>
      </div>
    </StyledAllLocationDetailItem>
  )
}

const StyledAllLocationDetailItem = styled.section`
  margin: auto;
  width: 80%;
  height: 150px;
  background-color: ${({ theme, item }) => {
    if (item.pm10Grade === '1') {
      return theme.palett.pm10Grade1
    } else if (item.pm10Grade === '2') {
      return theme.palett.pm10Grade2
    } else if (item.pm10Grade === '3') {
      return theme.palett.pm10Grade3
    } else if (item.pm10Grade === '4') {
      return theme.palett.pm10Grade4
    } else if (item.pm10Grade === '5') {
      return theme.palett.pm10Grade5
    } else {
      return theme.palett.pm10GradeNull
    }
  }};
  margin-top: 10px;
  border-radius: 10px;
  color: #fff;

  .location-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
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
      color: ${({ theme, item }) => {
        if (item.pm10Grade === '1') {
          return theme.palett.pm10Grade1
        } else if (item.pm10Grade === '2') {
          return theme.palett.pm10Grade2
        } else if (item.pm10Grade === '3') {
          return theme.palett.pm10Grade3
        } else if (item.pm10Grade === '4') {
          return theme.palett.pm10Grade4
        } else if (item.pm10Grade === '5') {
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

export default React.memo(AllLocationDetailItem)
