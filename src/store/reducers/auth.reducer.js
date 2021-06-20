import { SIGN_IN, SIGN_OUT, SIGN_UP } from "../const/auth.const";

const initialState = {
    userLogin: {},
    userSignUp: {},
}


export const authReducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case SIGN_IN:
            state.userLogin = payload;
            return {...state}
        case SIGN_UP:
            state.userSignUp = payload;
            return{...state};
        case SIGN_OUT: 
            state.userLogin = null;
            return {...state};
        default:
            return {...state}   
    }
}