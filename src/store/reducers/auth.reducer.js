import { SIGN_IN } from "../actions/auth.action";
import { SIGN_UP } from "../actions/auth.action";

const initialState = {
    token: null,
    userId: null,
    isLoading: false,
};

const AuthReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SIGN_UP_START":
            return {
                ...state,
                isLoading: true,
            };
        case SIGN_UP:
            return {
                ...state,
                isLoading: true,
                token: action.token,
                userId: action.userId,
            };
        case "SIGN_UP_FAIL":
            return {
                ...state,
                isLoading: false,
            };
        case "SIGN_IN_START":
            return {
                ...state,
                isLoading: true,
            };
        case SIGN_IN:
            return {
                ...state,
                isLoading: true,
                token: action.token,
                userId: action.userId,
            };
        case "SIGN_IN_FAIL":
            return {
                ...state,
                isLoading: false,
            };
        default:
            return state;
    }
}
export default AuthReducer;