import {createSlice,createAsyncThunk} from "@reduxjs/toolkit"


const intialshippingState = {shippingdetails:{},status:'idle'}

const ShippingSlice = createSlice({
    name:"Shippingdetails",
    initialState: intialshippingState,
    reducers:{
        addShipping:(state,action) =>{
            console.log("calling Redux")
            state.shippingdetails = action.payload;
        }
    }
});


export default ShippingSlice.reducer;
