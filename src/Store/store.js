import { configureStore } from '@reduxjs/toolkit'
import winDataSlice from '../Features/winDataSlice'


export const store = configureStore({
  reducer: winDataSlice,
})