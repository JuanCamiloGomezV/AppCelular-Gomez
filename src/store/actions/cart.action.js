export const DELETE_CART_ITEM = 'DELETE_CART_ITEM'
export const HANDLE_INCREASE_CART_ITEM = 'HANDLE_INCREASE_CART_ITEM'
export const HANDLE_DECREASE_CART_ITEM = 'HANDLE_DECREASE_CART_ITEM'
export const ADD_CART_ITEM = 'ADD_CART_ITEM'
export const CLEAR_CART = 'CLEAR_CART'
export const SHOW_MODAL = 'SHOW_MODAL'

export const deleteCartItem = (id) => ({
    type: DELETE_CART_ITEM,
    id,
})
export const addCartItem = (item) => ({
    type: ADD_CART_ITEM,
    item,
})
export const clearCart = () => ({
    type: CLEAR_CART,
})
export const handleIncreaseCartItem = (id) => ({
    type: HANDLE_INCREASE_CART_ITEM,
    id,
})
export const handleDecreaseCartItem = (id) => ({
    type: HANDLE_DECREASE_CART_ITEM,
    id,
})