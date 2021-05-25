import {configureStore} from '@reduxjs/toolkit';
import uiSlice from './ui-slice'
import cartSlice from './Cart/slice'

const store = configureStore({
    reducer: {
        ui: uiSlice.reducer,
        cart: cartSlice.reducer
    }
})

export default store;