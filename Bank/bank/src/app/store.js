import { configureStore } from '@reduxjs/toolkit'
import accountReduces from '../slices/accountSlice'
import bonusReducers from '../slices/bonusSlice'
export const store = configureStore({
  reducer: {
    account:accountReduces,
    bonus:bonusReducers
  },
})