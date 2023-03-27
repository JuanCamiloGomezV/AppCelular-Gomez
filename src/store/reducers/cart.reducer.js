import { ADD_CART_ITEM, CLEAR_CART, DELETE_CART_ITEM, HANDLE_DECREASE_CART_ITEM, HANDLE_INCREASE_CART_ITEM, SHOW_MODAL } from "../actions/cart.action";

import { BREADS } from "../../data/breads";

const initialState = {
    breads: BREADS,
    cart: [],
    total: 0,
    amount: 0,
}

const CartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_CART_ITEM:
            if (state.cart.find(item => item.id === action.item.id)) {
                return {
                    ...state,
                    cart: state.cart.map(item => {
                        if (item.id === action.item.id) {
                            return {...item, quantity: item.quantity + action.item.quantity, total: item.total + action.item.total }
                        }
                        return item
                    }),
                    total: Number(state.total) + Number(action.item.total),
                }
            } else {
                return {
                    ...state,
                    cart: [...state.cart, {...action.item }],
                    amount: state.amount + 1,
                    total: Number(state.total) + Number(action.item.total)
                }
            }
        case DELETE_CART_ITEM:
            return {
                ...state,
                total: Number(state.total) - Number(state.cart.find(item => item.id === action.id).total),
                cart: state.cart.filter(item => item.id !== action.id),
                amount: state.amount - 1,
            }
        case HANDLE_DECREASE_CART_ITEM:
            return {
                ...state,
                cart: state.cart.map(item => {
                    if (item.id === action.id) {
                        if (item.quantity === 1) {
                            null
                        } else {
                            return {...item, quantity: item.quantity - 1, total: Number(item.total) - Number(item.price) }
                        }
                    }
                    return item
                }),
                total: state.cart.find(item => item.id === action.id).quantity >= 2 ? state.total - Number(state.cart.find(item => item.id === action.id).price) : state.total,
            }
        case HANDLE_INCREASE_CART_ITEM:
            return {
                ...state,
                cart: state.cart.map(item => {
                    if (item.id === action.id) {
                        return {...item, quantity: item.quantity + 1, total: Number(item.total) + Number(item.price) }
                    }
                    return item
                }),
                total: state.total + Number(state.cart.find(item => item.id === action.id).price),
            }
        case CLEAR_CART:
            return {
                ...state,
                cart: [],
                total: 0,
                amount: 0,
            }
        default:
            return state
    }
}


export default CartReducer;