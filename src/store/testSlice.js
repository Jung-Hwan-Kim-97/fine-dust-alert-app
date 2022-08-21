import { createSlice } from '@reduxjs/toolkit'

const testSlice = createSlice({
  name: 'testSlice',
  initialState: {
    number: 0,
  },
  reducers: {
    increase(state, action) {
      state.number += 1
    },
    decrease(state, action) {
      state.number -= 1
    },
  },
})

export const { increase, decrease } = testSlice.actions

export default testSlice
