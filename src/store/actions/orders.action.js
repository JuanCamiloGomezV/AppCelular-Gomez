import { URL_API } from '../../data/Database'

export const GET_ORDERS = 'GET_ORDERS'
export const DELETE_ORDER = 'DELETE_ORDER'
export const SELECT_ORDER = 'SELECT_ORDER'

export const getOrders = () => {
    return async dispatch => {
        try {
            const response = await fetch(URL_API + 'orders.json', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                },
            })
            const result = await response.json()
            const orders = Object.keys(result).map(key => ({
                ...result[key],
                id: key
            }))
            dispatch({
                type: GET_ORDERS,
                orders: orders,
            })
        } catch (error) {
            console.log(error.message)
        }

    }
}

export const deleteOrder = (id) => {
    return async dispatch => {
        try {
            const response = await fetch(URL_API + 'orders/' + id + '.json', {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                },
            })
            dispatch({
                type: DELETE_ORDER,
                id,
            })
        } catch (error) {
            console.log(error.message)
        }

    }
}
export const selectOrder = (orderId) => ({
    type: SELECT_ORDER,
    orderId,
})