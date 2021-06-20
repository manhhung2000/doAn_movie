import axios from "axios"
import { GET_KHUYEN_MAI, GET_NEWS, GET_REVIEW } from "../const/news.const";

export const getNewsAction = () => {
    return async (dispatch) => {
        try {
            const res = await axios ({
                url: "https://60b9defd80400f00177b7188.mockapi.io/new1",
                method: "GET",
            });

            dispatch({
                type: GET_NEWS,
                payload: res.data,
            })
        } catch (error) {
            console.log(error);
        }
    }
}

export const getReviewAction = () => {
    return async (dispatch) => {
        try {
            const res = await axios ({
                url: "https://60b9defd80400f00177b7188.mockapi.io/new2",
                method: "GET",
            });

            dispatch({
                type: GET_REVIEW,
                payload: res.data,
            })
        } catch (error) {
            console.log(error);
        }
    }
}

export const getKhuyenMaiAction = () => {
    return async (dispatch) => {
        try {
            const res = await axios ({
                url: "https://60b9defd80400f00177b7188.mockapi.io/new3",
                method: "GET",
            });

            dispatch({
                type: GET_KHUYEN_MAI,
                payload: res.data,
            })
        } catch (error) {
            console.log(error);
        }
    }
}