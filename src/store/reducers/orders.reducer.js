import { DELETE_ORDER, GET_ORDERS } from '../actions/orders.action'

const initialState = {
    orders: []
}

const OrdersReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ORDERS:
            return {
                ...state,
                orders: action.orders
            }
        case DELETE_ORDER:
            return {
                ...state,
                orders: state.orders.filter(order => order.id !== action.id)
            }

        default:
            return state
    }
}

export default OrdersReducer