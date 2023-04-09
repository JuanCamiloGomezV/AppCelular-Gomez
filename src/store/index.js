import { applyMiddleware, combineReducers, createStore } from "redux";

import AuthReducer from "./reducers/auth.reducer";
import BreadsReducer from "./reducers/breads.redurcer";
import CartReducer from "./reducers/cart.reducer";
import CategoryReducer from "./reducers/category.reducer";
import OrdersReducer from "./reducers/orders.reducer";
import PlaceReducer from "./reducers/photo.reducer";
import thunk from "redux-thunk";

const RootReducer = combineReducers({
    categories: CategoryReducer,
    breads: BreadsReducer,
    cart: CartReducer,
    orders: OrdersReducer,
    auth: AuthReducer,
    photo: PlaceReducer
})

export default createStore(RootReducer, applyMiddleware(thunk))