import { START_LOADING, STOP_LOADING } from "../const/common.const";

const initialState = {
    loading: false, // false là không load trang, true ngược lại
}

export const commonReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case START_LOADING:
            state.loading = true;
            return {...state};
        case STOP_LOADING:
            state.loading = false;
            return {...state};
        default:
            return {...state};
    }
}