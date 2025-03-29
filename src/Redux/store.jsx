import {configureStore} from "@reduxjs/toolkit"
import shippingReducer from '../Redux/Reducer/shippingReducer'


const store = configureStore({
    reducer:{
        shipping:shippingReducer   
    }
})

export default store;
