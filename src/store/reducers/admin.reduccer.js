import {
  DELETE_ADMIN,
  DELETE_SEARCH,
  GET_LIST_ADMIN_PAGE,
  TIM_KIEM_NGUOI_DUNG_PHAN_TRANG,
} from "../const/admin.const";

const initialState = {
  listAdminPage: [],
  listSearchPage: [],
};

export const adminReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    // case GET_LIST_ADMIN:
    //   state.listAdmin = payload;
    //   return { ...state };
    case GET_LIST_ADMIN_PAGE:
      state.listAdminPage = payload;
      return { ...state };
    // case TIM_KIEM_NGUOI_DUNG:
    //   state.listSearch = payload;
    //   return { ...state };
    case TIM_KIEM_NGUOI_DUNG_PHAN_TRANG:
      state.listSearchPage = payload;
      return { ...state };
    case DELETE_ADMIN:
      //   console.log("payload", payload);
      const newListAdminPage = [...state.listAdminPage.items];
      const index = newListAdminPage.findIndex(
        (item) => item.taiKhoan === payload
      );
      //   console.log(index);
      if (index !== -1) {
        newListAdminPage.splice(index, 1);
        state.listAdminPage.items = newListAdminPage;
      }
      return { ...state };
    case DELETE_SEARCH:
      const newListSearchPage = [...state.listSearchPage.items];
      const indexSearch = newListSearchPage.findIndex(
        (itemSearch) => itemSearch.taiKhoan === payload
      );
      if (indexSearch !== -1) {
        newListSearchPage.splice(indexSearch, 1);
        state.listSearchPage.items = newListSearchPage;
      }
      return { ...state };
    default:
      return { ...state };
  }
};
