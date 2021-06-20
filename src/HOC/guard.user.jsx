import React from 'react'
import { Redirect } from 'react-router-dom';

function GuardUser(props) {

    const taiKhoan = JSON.parse(localStorage.getItem("taiKhoan"));

    if(taiKhoan !== "" && taiKhoan !== null) {
        // cho đi vào Admin
        return props.children;
    } else {
        // chuyển về trang chủ
        return <Redirect to="/"/>
    }




    return (
        <div>
            
        </div>
    )
}

export default GuardUser;