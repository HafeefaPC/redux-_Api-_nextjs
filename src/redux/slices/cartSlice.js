import { createSlice } from '@reduxjs/toolkit'

const initialState ={
    loading: true,
    carItems: [],
    shippingAddress: {},
    paymentMethod: '',
}
const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
      addToCart: (state, action) => {
        const item = action.payload
        const existItem = state.cartItems.find((x) => x.id === item.id)
        if (existItem) {
          state.cartItems = state.cartItems.map((x) =>
            x.id === existItem.id ? item : x
          )
        } else {
          state.cartItems = [...state.cartItems, item]
        }
        state.itemsPrice = addDecimals(
          state.cartItems.reduce((acc, item) => acc + item.price * item.qty, 0)
        )
        state.shippingPrice = addDecimals(state.itemsPrice > 100 ? 0 : 100)
        state.taxPrice = addDecimals(Number(0.15 * state.itemsPrice))
        state.totalPrice = addDecimals(
          Number(state.itemsPrice) +
            Number(state.shippingPrice) +
            Number(state.taxPrice)
        )
      },
      removeFromCart: (state, action) => {
        state.cartItems = state.cartItems.filter((x) => x.id !== action.payload)
      state.itemsPrice = addDecimals(
        state.cartItems.reduce((acc, item) => acc + item.price * item.qty, 0)
      )
      state.shippingPrice = addDecimals(state.itemsPrice > 100 ? 0 : 100)
      state.taxPrice = addDecimals(Number(0.15 * state.itemsPrice))
      state.totalPrice = addDecimals(
        Number(state.itemsPrice) +
          Number(state.shippingPrice) +
          Number(state.taxPrice)
      )
      Cookies.set('cart', JSON.stringify(state))
      },
      hideLoading: (state) => {
        state.loading = false
      },
      
    },
})  
  export const {  addToCart, removeFromCart , hideLoading} = cartSlice.actions
  
  export default cartSlice.reducer