import { GET_MOVIE_DETAIL, GET_MOVIE_DETAIL_CLUSTER, GET_MOVIE_LIST } from "../const/movie.const";
import axios from 'axios';
import { startLoadingAction, stopLoadingAction } from "./common.action";

export const getMovieListAction = () => { 
    return async (dispatch) => {
        try {

            dispatch(startLoadingAction());

            const res = await axios({
              url:
                "https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01",
              method: "GET",
            });
            dispatch({
                type: GET_MOVIE_LIST,
                payload: res.data,
            })
            dispatch(stopLoadingAction());
        } catch (error) {
            dispatch(stopLoadingAction());
            console.log(error);
        }
    };
};

export const getMovieDetailAction = (maPhim) => {
    return async (dispatch) => {
        try {
            // start loading
            dispatch(startLoadingAction());

            // tác vụ mất thời gian
            const res = await axios ({
                url: `https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayThongTinPhim?MaPhim=${maPhim}`,
                method: "GET",
            });
            dispatch ({
                type: GET_MOVIE_DETAIL,
                payload: res.data,
            });

            // stop loading
            dispatch(stopLoadingAction());
        } catch (error) {
            // stop loading
            dispatch(stopLoadingAction());
            console.log(error);
        }
    }   
}

export const getMovieDetailClusterAction = (rap) => {
    return {
        type: GET_MOVIE_DETAIL_CLUSTER,
        payload: rap,
    }
}   