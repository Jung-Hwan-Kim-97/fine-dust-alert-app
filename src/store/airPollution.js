import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import data from '../assets/incheon'
// const ActionType = {
//   AirPollution: 'airPollutionSlice/fetchAirPollution',
// }

// const getParameters = {
//   serviceKey:
//     'ScIRoRfTgzPrD4Wu0Bxp0a/ujuo2/DqDH1U8S5oBlSuekUlZXVDHNpjBi+D3ujWFPljM/wdbx126IFVzVHbuHg==',
//   returnType: 'json',
//   numOfRows: '100',
//   pageNo: '1',
//   sidoName: '서울',
//   ver: '1.0',
// }

// const fetchAirPollution = createAsyncThunk(
//   ActionType.AirPollution,
//   async () => {
//     try {
//       const res = await axios({
//         headers: {
//           'content-type': 'application/json',
//         },
//         url: '/api/B552584/ArpltnInforInqireSvc/getCtprvnRltmMesureDnsty',
//         mehod: 'GET',
//         data: getParameters,
//       })

//       console.log(res)
//       return res
//     } catch (err) {
//       console.log(err)
//     }
//   },
// )

const airPollutionSlice = createSlice({
  name: 'airPollutionSlice',
  initialState: {
    pollutionData: data.response.body.items,
    favoriteList: [],
  },
  reducers: {
    addFavorite(state, actions) {
      state.favoriteList = state.favoriteList.concat(actions.payload)
    },

    changeIcon(state, actions) {
      state.pollutionData.map(i => {
        return i.stationName === actions.payload.stationName
          ? (i.favorite = !i.favorite)
          : i
      })
    },

    deleteFavorite(state, actions) {
      state.favoriteList = state.favoriteList.filter(item => {
        return item.stationName !== actions.payload.stationName
      })
    },
  },
  // extraReducers: builder => {
  //   builder.addCase(fetchAirPollution.fulfilled, (state, action) => {
  //     console.log(action)
  //   })
  // },
})

export const { addFavorite, deleteFavorite, changeIcon } =
  airPollutionSlice.actions
export default airPollutionSlice
