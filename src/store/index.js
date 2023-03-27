import { combineReducers, createStore } from "redux";

import BreadsReducer from "./reducers/breads.redurcer";
import CartReducer from "./reducers/cart.reducer";
import CategoryReducer from "./reducers/category.reducer";

const RootReducer = combineReducers({
    categories: CategoryReducer,
    breads: BreadsReducer,
    cart: CartReducer,
})

export default createStore(RootReducer)