import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: [],
    reducers: {
        addToCart : (state, actionFromComponent)=> {
            const existingProduct = state.find(item=>item.id==actionFromComponent.payload.id);
            if(existingProduct){
                existingProduct.quantity++
                existingProduct.totalPrice = existingProduct.quantity * existingProduct.price
                const remainingProducts = state.filter(item=>item.id!=existingProduct.id)
                state = [...remainingProducts,existingProduct]
                
            }else{
                state.push({...actionFromComponent.payload,quantity:1,totalPrice:actionFromComponent.payload.price});
            }
            
        },
        incrementByQuantity : (state , actionByCart)=>{
           const existingProduct = state.find(item=>item.id==actionByCart.payload);
            existingProduct.quantity++
            existingProduct.totalPrice = existingProduct.quantity * existingProduct.price
            const remainingProducts = state.filter(item=>item.id!=existingProduct.id)
            state = [...remainingProducts,existingProduct]
                
        }

    }

})
export default cartSlice.reducer
export const {addToCart} = cartSlice.actions;  