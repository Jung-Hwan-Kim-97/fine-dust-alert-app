import { configureStore } from '@reduxjs/toolkit'
import testSlice from './testSlice'
import airPollutionSlice from './airPollution'
const store = configureStore({
  reducer: {
    test: testSlice.reducer,
    airPollution: airPollutionSlice.reducer,
  },
})

export default store
