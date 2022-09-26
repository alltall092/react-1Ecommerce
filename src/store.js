import { configureStore } from '@reduxjs/toolkit'
import  counterSlice  from './counter-slice'
import usernameSlice from './username-slice'
export default configureStore({
  reducer: {
counter:counterSlice,
user:usernameSlice

	}
})