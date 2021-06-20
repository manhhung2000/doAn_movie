import  axios  from 'axios';
import { SIGN_IN, SIGN_OUT, SIGN_UP } from '../const/auth.const';

export const signInAction =     (user, history) => {
    return async (dispatch) => {
        try {
            const res = await axios ({
                method: "POST",
                url: "https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap",
                data: user,
            });
            const { accessToken, taiKhoan, maLoaiNguoiDung, ...userLogin } = res.data;
            // set localStorage
            localStorage.setItem("token", JSON.stringify(accessToken));
            localStorage.setItem("taiKhoan", JSON.stringify(taiKhoan));
            localStorage.setItem("maLoaiNguoiDung", JSON.stringify(maLoaiNguoiDung));

            // đẩy userLogin lên store
            dispatch({
                type: SIGN_IN,
                payload: userLogin,
            });
            // chuyển trang
            history.push("/");
            console.log(res);
        }
        catch (error) {
            console.log(error);
        }
    }
}

export const signUpAction = (user, history) => {
    
    return async (dispatch) => {
        try {
            console.log("user : " , user)
            const res = await axios ({
                url: "https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangKy",
                method: "POST",
                data: user,
            });
            console.log(res.data);
            const {...userSignUp} = res.data;
            dispatch({
                type: SIGN_UP,
                payload: userSignUp,
            });
            alert("đăng kí tài khoản thành công");
            history.push("/sign-in");
            console.log(res);
        }
        catch (error) {
            alert("đăng kí không thành công");
            console.log(error);
        }
    }
}

export const signOutAction = (history) => {

    localStorage.clear();
    history.push("/");
    return {
        type: SIGN_OUT
    };
}