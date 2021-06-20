import { START_LOADING, STOP_LOADING } from "../const/common.const"

export const startLoadingAction = () => {
    return {
        type: START_LOADING,
    };
};
export const stopLoadingAction = () => {
    return {
        type: STOP_LOADING,
    };
};