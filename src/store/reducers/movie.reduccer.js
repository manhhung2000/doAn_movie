import { GET_MOVIE_DETAIL, GET_MOVIE_DETAIL_CLUSTER, GET_MOVIE_LIST } from "../const/movie.const";

const initialState = {
    movieList: [],
    movieDetail: [],
    movieDetailCluster: [],
}


export const movieReducer = (state = initialState, action) => {
    const {type, payload} = action;
    switch (type) {
        case GET_MOVIE_LIST: {
            state.movieList = payload;
            return {...state};
        }
        case GET_MOVIE_DETAIL: {
            state.movieDetail = payload;
            return{...state};
        }
        case GET_MOVIE_DETAIL_CLUSTER: {
            // console.log("payload",payload);
            let newMovieDetail = {...state.movieDetail};
            state.movieDetailCluster = [];
            // console.log(payload);
            // const index = newMovieDetail.lichChieu.findIndex((rap) => rap.thongTinRap.maCumRap === payload);
            for(let i = 0; i < newMovieDetail.lichChieu.length; i++) {
                if(newMovieDetail.lichChieu[i].thongTinRap.maCumRap === payload) {
                    state.movieDetailCluster.push(newMovieDetail.lichChieu[i]);
                }
            }
            
            // console.log(newMovieDetail.lichChieu[index]);
            // state.movieDetailCluster.push(newMovieDetail.lichChieu[index]);
            // console.log(state.movieDetailCluster);
            return {...state};
        }
        default:
            return state;
    }
}