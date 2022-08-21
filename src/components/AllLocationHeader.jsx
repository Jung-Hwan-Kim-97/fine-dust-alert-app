import styled from 'styled-components'

const AllLocationHeader = () => {
  return (
    <StyledAllLocationHeader>
      <select className="station">
        <option value="인천">인천</option>
      </select>
    </StyledAllLocationHeader>
  )
}
const StyledAllLocationHeader = styled.div`
  height: 50px;
  border-bottom: 1px solid #808080;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #4e8df5;
  .station {
    outline: none;
    padding: 0 60px;
    box-sizing: border-box;
    font-weight: 700;
  }
`

export default AllLocationHeader
