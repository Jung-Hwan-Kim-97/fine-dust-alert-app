import React, { useMemo, useState } from 'react'
import { useDispatch } from 'react-redux'
import { addFavorite, deleteFavorite, changeIcon } from '../store/airPollution'
import { AiFillStar } from 'react-icons/ai'
import styled from 'styled-components'
const AllLocationFavoriteIcon = ({ item }) => {
  const dispatch = useDispatch()

  const onFavoriteMode = item => {
    dispatch(addFavorite(item))
  }

  const offFavoriteMode = item => {
    dispatch(deleteFavorite(item))
  }

  const onChangeMode = item => {
    dispatch(changeIcon(item))
  }

  return (
    <StyledAllLocationFavoriteIcon className="favorite">
      {item.favorite ? (
        <AiFillStar
          size="25"
          color="yellow"
          onClick={() => {
            offFavoriteMode(item)
            onChangeMode(item)
          }}
        />
      ) : (
        <AiFillStar
          size="25"
          color="#fff"
          onClick={() => {
            onFavoriteMode(item)
            onChangeMode(item)
          }}
        />
      )}
    </StyledAllLocationFavoriteIcon>
  )
}
const StyledAllLocationFavoriteIcon = styled.div`
  margin-right: 8px;
`

export default AllLocationFavoriteIcon
