// jss: cho phép viết css trong js
// jsx: cho phép viết html trong js


/**
 * các bước custom css:
 *      1/ tạo biến style
 *      2/ withStyles với component
 *      3/ lấy props classes
 *      4/ dùng classes cho các className của component 
 */
export const style = {
    // key là tên class css : value là các thuộc tính css
    myBtn: {
        backgroundColor: "#dc3456",
        '&:hover' : {
            backgroundColor: "#dc3466",
        },
    }
}