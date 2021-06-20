import axios from "axios";
import { data } from "jquery";
import {
  DELETE_ADMIN,
  DELETE_SEARCH,
  GET_LIST_ADMIN,
  GET_LIST_ADMIN_PAGE,
  TIM_KIEM_NGUOI_DUNG,
  TIM_KIEM_NGUOI_DUNG_PHAN_TRANG,
  UPDATE_ADMIN,
} from "../const/admin.const";

// export const getListAdminAction = () => {
//   return async (dispatch) => {
//     try {
//       const res = await axios({
//         method: "GET",
//         url: "https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP01",
//         data: "",
//       });
//       dispatch({
//         type: GET_LIST_ADMIN,
//         payload: res.data,
//       });
//     } catch (error) {
//       console.log(error);
//     }
//   };
// };

export const getListAdminPageAction = (soTrang) => {
  return async (dispatch) => {
    try {
      const res = await axios({
        method: "GET",
        url: `https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/LayDanhSachNguoiDungPhanTrang?MaNhom=GP01&soTrang=${soTrang}&soPhanTuTrenTrang=20`,
        data: "",
      });
      // console.log(res.data);
      dispatch({
        type: GET_LIST_ADMIN_PAGE,
        payload: res.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

// export const searchAdminAction = (tuKhoa) => {
//   return async (dispatch) => {
//     try {
//       const res = await axios({
//         method: "GET",
//         url: `https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/TimKiemNguoiDung?MaNhom=GP01&tuKhoa=${tuKhoa}`,
//         data: "",
//       });
//       dispatch({
//         type: TIM_KIEM_NGUOI_DUNG,
//         payload: res.data,
//       });
//     } catch (error) {
//       console.log(error);
//     }
//   };
// };

export const searchAdminPageAction = (tuKhoa, soTrang) => {
  return async (dispatch) => {
    try {
      const res = await axios({
        method: "GET",
        url: `https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/TimKiemNguoiDungPhanTrang?MaNhom=GP01&tuKhoa=${tuKhoa}&soTrang=${soTrang}&soPhanTuTrenTrang=10`,
        data: "",
      });
      //   console.log("data" ,res.data);
      dispatch({
        type: TIM_KIEM_NGUOI_DUNG_PHAN_TRANG,
        payload: res.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const updateAdminPageAction = (user, history) => {
  return async (dispatch) => {
    try {
      const token = JSON.parse(localStorage.getItem("token"));
      const res = await axios({
        url: "https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/CapNhatThongTinNguoiDung",
        method: "PUT",
        data: user,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      dispatch({
        type: UPDATE_ADMIN,
        payload: res.data,
      });
      alert("cập nhật tài khoản thành công");
      history.push("/admin");
      // console.log(res.data);
    } catch (error) {
      alert("cập nhật tài khoản thất bại");
      console.log(error);
    }
  };
};

export const deleteAdminAction = (taiKhoan) => {
  return async (dispatch) => {
    try {
      const token = JSON.parse(localStorage.getItem("token"));
      const res = await axios({
        url: `https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=${taiKhoan}`,
        method: "DELETE",
        data: taiKhoan,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(res.data);
      dispatch({
        type: DELETE_ADMIN,
        payload: taiKhoan,
      });
    } catch (error) {
      alert("Người dùng là quản trị nên không thể xoá");
      console.log(error);
    }
  };
};

export const deleteSearchAction = (taiKhoan) => {
  return async (dispatch) => {
    try {
      const token = JSON.parse(localStorage.getItem("token"));
      const res = await axios({
        url: `https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=${taiKhoan}`,
        method: "DELETE",
        data: taiKhoan,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(res.data);
      dispatch({
        type: DELETE_SEARCH,
        payload: taiKhoan,
      });
    } catch (error) {
      alert("Người dùng là quản trị nên không thể xoá");
      console.log(error);
    }
  };
};