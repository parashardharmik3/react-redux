import { createAction, createSlice } from '@reduxjs/toolkit'

const initialState = {
  points: 0,
}
const incrementbybonus = createAction('account/incrementByAmountA')
export const bonusSlice = createSlice({
  name: 'bonus',
  initialState,
  reducers: {
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.points += 1
    },
    decrement: (state) => {
      state.points -= 1
    },
    incrementByAmount: (state, action) => {
      state.points += action.payload
    },
  },
  extraReducers:(builder)=>{
    builder.addCase(incrementbybonus,(state,action)=> {
        if(action.payload>=100){
            state.points++;
        }else{
            return state;
        }
    })
  }
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = bonusSlice.actions

export default bonusSlice.reducer