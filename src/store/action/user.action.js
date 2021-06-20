import axios from "axios";
import { GET_USER, UPDATE_USER } from "../const/user.const";

export const getUserAction = (taiKhoan) => {
    
    return async (dispatch) => {
        try {
            // const taiKhoan = JSON.parse(localStorage.getItem("taiKhoan"));
            // console.log(taiKhoan);
            const res = await axios ({
                method: "POST",
                url: "https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/ThongTinTaiKhoan",
                data: {
                    taiKhoan: taiKhoan,
                },
            })
            // console.log(res.data);
            dispatch ({
                type: GET_USER,
                payload: res.data,
            })
        } catch (error) {
            console.log(error);
        }
    }
}


export const updateUserAction = (user, history) => {
    return async (dispatch) => {
        try {
            const token =  JSON.parse(localStorage.getItem("token"));

            const res = await axios ({
                url: "https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/CapNhatThongTinNguoiDung",
                method: "PUT",
                data: user,
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            })
            // console.log("data",res.data);
            dispatch({
                type: UPDATE_USER,
                payload: res.data
            })
            alert("cập nhật tài khoản thành công");
            history.push("/user");
        } catch (error) {
            alert("cập nhật tài khoản thất bại");
            console.log(error);
        }
    }
}