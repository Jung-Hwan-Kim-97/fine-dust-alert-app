import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { AiFillStar } from 'react-icons/ai'
import { FaMapMarkedAlt, FaMapMarkerAlt } from 'react-icons/fa'
const BottomNav = () => {
  const { pollutionData } = useSelector(state => state.airPollution)
  const station = pollutionData.filter(item => {
    return item.stationName === '부평'
  })
  const [isActive, setIsActive] = useState('myLocation')

  return (
    <StyledBottomNav>
      <NavLink
        to="/station/부평"
        className="btn"
        state={{ station }}
        style={
          isActive === 'myLocation'
            ? { backgroundColor: 'rgba(0, 0, 0, .3)' }
            : {}
        }
        onClick={() => {
          setIsActive('myLocation')
        }}
      >
        <FaMapMarkerAlt size="30" color="red" />
        <p> 내 지역보기</p>
      </NavLink>
      <NavLink
        to="/alllocation"
        className="btn"
        style={
          isActive === 'allLocation'
            ? { backgroundColor: 'rgba(0, 0, 0, .3)' }
            : {}
        }
        onClick={() => {
          setIsActive('allLocation')
        }}
      >
        <FaMapMarkedAlt size="30" color="royalblue" />
        <p>전체 시도보기</p>
      </NavLink>
      <NavLink
        to="/favorite"
        className="btn"
        style={
          isActive === 'favorite'
            ? { backgroundColor: 'rgba(0, 0, 0, .3)' }
            : {}
        }
        onClick={() => {
          setIsActive('favorite')
        }}
      >
        <AiFillStar size="30" color="yellow" />
        <p>즐겨찾기</p>
      </NavLink>
    </StyledBottomNav>
  )
}

const StyledBottomNav = styled.div`
  bottom: 0;
  width: 100%;
  border-top: 1px solid #808080;
  display: flex;
  .btn {
    border-right: 1px solid black;
    flex-grow: 1;
    text-decoration: none;
    color: #000;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    p {
      margin-top: 5px;
      font-size: 12px;
    }
    &:hover {
      background-color: rgba(0, 0, 0, 0.3);
    }
  }
  .btn-active {
    background-color: green;
  }
`

export default React.memo(BottomNav)
