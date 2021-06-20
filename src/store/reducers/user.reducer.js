import { GET_USER, UPDATE_USER } from "../const/user.const";

const initialState = {
    userDetail: [],
    newUser: [],
}

export const userReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case GET_USER:
            state.userDetail = payload;
            return {...state};
        case UPDATE_USER:
            state.userDetail = payload;
        default:
            return {...state};
    }
}