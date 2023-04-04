import { SIGN_IN_URL } from "../../data/Database";
import { SIGN_UP_URL } from "../../data/Database";

export const SIGN_UP = "SIGN_UP";
export const SIGN_IN = "SIGN_IN";

export const signUp = (email, password) => {
    return async dispatch => {
        try {
            dispatch({ type: "SIGN_UP_START" });
            const response = await fetch(SIGN_UP_URL, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    email: email,
                    password: password,
                    returnSecureToken: true,
                }),
            });
            if (!response.ok) {
                throw new Error("Something went wrong!");
            }
            const resData = await response.json();
            console.log(resData);
            dispatch({
                type: SIGN_UP,
                token: resData.idToken,
                userId: resData.localId,
            });
        } catch (err) {
            alert('Correo ya existente')
            console.log(err);
            dispatch({ type: "SIGN_UP_FAIL" });
        }
    }
};

export const signIn = (email, password) => {
    return async dispatch => {
        try {
            dispatch({ type: "SIGN_IN_START" });
            const response = await fetch(SIGN_IN_URL, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    email: email,
                    password: password,
                    returnSecureToken: true,
                }),
            });
            if (!response.ok) {
                throw new Error("Something went wrong!");
            }
            const resData = await response.json();
            console.log(resData);
            dispatch({
                type: SIGN_IN,
                token: resData.idToken,
                userId: resData.localId,
            });
        } catch (err) {
            alert('Correo o contraseña incorrectos')
            console.log(err);
            dispatch({ type: "SIGN_IN_FAIL" });
        }
    }
};