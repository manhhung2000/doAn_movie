import { combineReducers } from 'redux';
import { movieReducer } from './movie.reduccer';
import { authReducer } from './auth.reducer';
import { bookingReducer } from './booking.reducer'
import { commonReducer } from './common.reducer';
import { cinemaReducer } from './cinema.reducer';
import { newsReducer } from './news.reducer';
import { userReducer } from './user.reducer';
import { adminReducer } from './admin.reduccer';


export const rootReducer = combineReducers({
    movie: movieReducer,
    auth: authReducer,
    booking: bookingReducer,
    common: commonReducer,
    cinema: cinemaReducer,
    news: newsReducer,
    user: userReducer,
    admin: adminReducer,
});

