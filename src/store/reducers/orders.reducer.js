import { DELETE_ORDER, GET_ORDERS, SELECT_ORDER } from '../actions/orders.action'

const initialState = {
    orders: [],
    selected: null,
    loading: false
}

const OrdersReducer = (state = initialState, action) => {
    switch (action.type) {
        case "GET_ORDERS_START":
            return {
                ...state,
                loading: true
            }
        case GET_ORDERS:
            return {
                ...state,
                orders: action.orders,
                loading: false
            }
        case DELETE_ORDER:
            return {
                ...state,
                orders: state.orders.filter(order => order.id !== action.id),
                selected: null
            }
        case SELECT_ORDER:
            return {
                ...state,
                selected: state.orders.find(order => order.id === action.orderId)
            }
        default:
            return state
    }
}

export default OrdersReducer