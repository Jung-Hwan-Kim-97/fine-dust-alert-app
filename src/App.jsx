import React from 'react'
import styled from 'styled-components'
import Card from './components/Card'
const App = () => {
  return (
    <StyledApp>
      <Card />
    </StyledApp>
  )
}

const StyledApp = styled.div`
  height: 100vh;
  background-color: ${({ theme }) => theme.palett.white};
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Single Day', cursive;
`

export default App
