import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import FavoriteItem from '../components/FavoriteItem'
const Favorite = () => {
  const { favoriteList } = useSelector(state => state.airPollution)
  return (
    <StyledFavorite>
      {favoriteList.length === 0 ? (
        <p className="nullTest">즐겨찾기를 추가 해 주세요!</p>
      ) : (
        favoriteList.map(item => {
          return <FavoriteItem item={item} key={item.stationName} />
        })
      )}
    </StyledFavorite>
  )
}
const StyledFavorite = styled.div`
  position: relative;
  .nullTest {
    position: absolute;
    top: 200px;
    left: 80px;
    font-size: 25px;
    color: #11dba2;
  }
`

export default Favorite
