import React from 'react';
import { Redirect } from 'react-router-dom';

function GuardAdmin(props) {

    const maLoaiNguoiDung = JSON.parse(localStorage.getItem("maLoaiNguoiDung"));

    if(maLoaiNguoiDung === "QuanTri") {
        // cho đi vào Admin
        return props.children;
    } else {
        // chuyển về trang chủ
        return <Redirect to="/"/>
    }
}

export default GuardAdmin
