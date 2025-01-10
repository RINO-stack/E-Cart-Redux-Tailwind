import { createSlice } from "@reduxjs/toolkit";

const wishlistSlice = createSlice({
    name:'wishlist',
    initialState:[],
    reducers:{

        addToWishlist : (state , actionFromView)=>{
            state.push(actionFromView.payload)
        },
        removeFromWishlist : (state , actionFromView)=>{
            return state.filter(item=>item.id!=actionFromView.payload)
        }


    }


})
export default wishlistSlice.reducer
export const {addToWishlist , removeFromWishlist} = wishlistSlice.actions;  