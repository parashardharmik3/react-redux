import { createSlice,createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios';
const initialState = {
  account: 0,
}
export const fetchUserById = createAsyncThunk(
    'users/fetchByIdStatus',
    async (userId, thunkAPI) => {
      const { data } = await axios.get(`http://localhost:8800/account/${userId}`)
      return data.amount;
    },
  )

  

export const accountSlice = createSlice({
  name: 'account',
  initialState,
  reducers: {
    incrementA: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.account += 1
    },
    decrementA: (state) => {
      state.account -= 1
    },
    incrementByAmountA: (state, action) => {
      state.account += action.payload
    },
  },
  extraReducers:(builder) => {
    builder.addCase(fetchUserById.fulfilled,(state,action)=> {
        state.account = action.payload;
    })
}
})

// Action creators are generated for each case reducer function
export const { incrementA, decrementA, incrementByAmountA } = accountSlice.actions

export default accountSlice.reducer