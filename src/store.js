import { configureStore } from '@reduxjs/toolkit'
import  counterSlice  from './counter-slice'
import usernameSlice from './username-slice'
import MovieSlice from './Movie-slice';
import MovieSelectedSlice from './movieSelected-slice';
import CarSlice from './Car.slice';
import SelectCarSlice from './SelectCar-slice';
import ShopincartSlice from './Shopingcart.slice';
export default configureStore({
  reducer: {
counter:counterSlice,
user:usernameSlice,
movie:MovieSlice,
movieSelected:MovieSelectedSlice,
carList:CarSlice,
selectedCar:SelectCarSlice,
cart:ShopincartSlice


	}
})