import { GET_KHUYEN_MAI, GET_NEWS, GET_REVIEW } from '../const/news.const';

const initialState = {
    listNews: [],
    listReview: [],
    listKhuyenMai: [],
}

export const newsReducer = (state = initialState, { type, payload }) => {
    switch (type) {

    case GET_NEWS:
        state.listNews = payload;
        state.listReview = payload;
    case GET_REVIEW:
        state.listReview = payload;
        return { ...state};
    case GET_KHUYEN_MAI:
        state.listKhuyenMai = payload;
        return { ...state};
    default:
        return { ...state};
    }
}
