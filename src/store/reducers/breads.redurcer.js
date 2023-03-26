import { FILTER_BREADS, SELECT_BREAD } from "../actions/breads.action";

import { BREADS } from "../../data/breads";

const initialState = {
    breads: BREADS,
    filteredBreads: [],
    selected: null
}

const BreadsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SELECT_BREAD:
            return {
                ...state,
                selected: state.breads.find(bread => bread.id === action.breadId)
            }
        case FILTER_BREADS:
            const { breads } = state
            return {
                ...state,
                filteredBreads: breads.filter((item) => item.category.includes(Number(action.categoryId)))
            }
        default:
            return state
    }
}

export default BreadsReducer;