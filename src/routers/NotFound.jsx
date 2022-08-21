import React from 'react'
import styled from 'styled-components'
import NotFoundImage from '../assets/NotFound.webp'
const NotFound = () => {
  return (
    <StyledNotFound>
      <img src={NotFoundImage} alt="" className="not-found-img" />
    </StyledNotFound>
  )
}

const StyledNotFound = styled.div`
  position: relative;
  .not-found-img {
    width: 300px;
    position: absolute;
    top: 100px;
    left: 35px;
  }
`

export default NotFound
