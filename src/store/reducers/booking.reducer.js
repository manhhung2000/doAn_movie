import { CHOICE_CHAIR, GET_CHAIR_LIST } from "../const/booking.const";

const initialState = {
    listChair: [],
}


export const bookingReducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case GET_CHAIR_LIST:
            state.listChair = payload;
            return {...state};
        case CHOICE_CHAIR: 
            let listChair = [...state.listChair];
            // tìm vị trí của ghế đang chọn
            const index = listChair.findIndex((chair) => chair.maGhe === payload.maGhe);
            
            // cập nhật thuộc tính đang chọn chog ghế
            if(index !== -1) {
                let oldChair = listChair[index];
                let newChair = {...oldChair, dangChon: !oldChair.dangChon};
                listChair[index] = newChair;
                state.listChair = listChair;
            }
            
            return {...state};
        default:
            return {...state};
    }

}