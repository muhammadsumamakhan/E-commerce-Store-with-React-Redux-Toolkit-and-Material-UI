import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cart: []
    },
    reducers: {
        addItem: (state, action) => {
            const cartItem = state.cart.some(item => item.id === action.payload.id);
            if (!cartItem) {
                state.cart.push(action.payload);
                action.payload.quantity = 1
                console.log("Item added to the cart.");
            } else {
                console.log("Item is already in the cart.");
            }
        },

        removeItem: (state, action) => {
            const index = state.cart.findIndex(item => item.id === action.payload.id);
            if (index !== -1) {
                state.cart.splice(index, 1);
            }
        },
        addQuantity: (state, action) => {
            const index = state.cart.findIndex(item => item.id === action.payload.id);
            if(index !== -1){
                state.cart[index].quantity += 1
            }
        },
        lessQuantity: (state, action) => {
            const index = state.cart.findIndex(item => item.id === action.payload.id);
            if (index !== -1) {
                state.cart[index].quantity -= 1;
                if (state.cart[index].quantity === 0) {
                    state.cart.splice(index, 1);
                }
            }
        },
    },
    
})

export const { addItem, removeItem, lessQuantity, addQuantity } = cartSlice.actions
export default cartSlice.reducer