import {createSlice} from '@reduxjs/toolkit';

const initialCartState = {
    items: [],
    totalQuantity: 0,
    cartChanged: false
}

const cartSlice = createSlice({
    name: 'cart',
    initialState: initialCartState,

    reducers: { 

        replaceCart(state, action) {
            state.totalQuantity = action.payload.totalQuantity;
            state.items = action.payload.items
        },

        addOneMoreToCart(state, action) {
            state.cartChanged = true;
            const itemIdx = state.items.findIndex(item => item.id === action.payload);
            state.items[itemIdx].quantity++;
            state.items[itemIdx].totalPrice = state.items[itemIdx].quantity * state.items[itemIdx].price;
        },
        

        addItemToCart(state, action) {
            state.cartChanged = true;
            const newItem = action.payload;
            const itemIdx = state.items.findIndex(item => item.id === newItem.id);

            if(itemIdx === -1) {
                state.items.push({...newItem, quantity: 1})
            } else {
                state.items[itemIdx].quantity++;
                state.items[itemIdx].totalPrice = state.items[itemIdx].quantity * state.items[itemIdx].price;
            }

            state.totalQuantity = state.items.reduce((ttl, item) => {
                return item.quantity + ttl;
            }, 0)

        },
        removeItemFromCart(state, action) {
            const itemIdx = state.items.findIndex(item => item.id === action.payload);
            console.log(state.items[itemIdx].quantity);


            if(state.items[itemIdx].quantity === 1) {
                state.items.splice(itemIdx,1);
            } else {
                state.items[itemIdx].quantity--;
                state.items[itemIdx].totalPrice = state.items[itemIdx].price * state.items[itemIdx].quantity;
            }
            state.totalQuantity = state.items.reduce((ttl, item) => {
                return item.quantity + ttl;
            }, 0)

        }
    }
})



export const cartActions = cartSlice.actions;
export default cartSlice;