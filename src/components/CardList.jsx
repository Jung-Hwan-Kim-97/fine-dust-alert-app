import React from 'react'
import styled from 'styled-components'
import { Route, Routes } from 'react-router-dom'
import MyLocation from '../routers/MyLocation'
import MyLocationDetail from '../routers/MyLocationDetail'
import AllLocation from '../routers/AllLocation'
import Favorite from '../routers/Favorite'
import NotFound from '../routers/NotFound'
const CardList = () => {
  return (
    <StyledCardList>
      <Routes>
        <Route path="/" element={<MyLocation />}>
          <Route path="station/:station" element={<MyLocationDetail />} />
        </Route>
        <Route path="/alllocation" element={<AllLocation />} />
        <Route path="/favorite" element={<Favorite />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </StyledCardList>
  )
}
const StyledCardList = styled.div`
  flex-grow: 1;
  overflow-y: scroll;
`

export default CardList
