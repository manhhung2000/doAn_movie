import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
// hooks
import { useSelector } from "react-redux";

import format from "date-format";
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

export default function ShowTime() {
  const showTimeList = useSelector((state) => {
    return state.movie.movieDetail.lichChieu;
  });

  const classes = useStyles();

  const renderShowTimeList = () => {
    // c1
    // if(showTimeList) {
    //     return showTimeList.map((showTime, index) => {
    //         return (
    //             <TableRow key={index}>
    //               <TableCell component="th" scope="row">
    //                 {index + 1}
    //               </TableCell>
    //               <TableCell>{showTime.thongTinRap.tenHeThongRap}</TableCell>
    //               <TableCell>{showTime.thongTinRap.tenCumRap}</TableCell>
    //               <TableCell>{showTime.giaVe}</TableCell>
    //               <TableCell>{showTime.ngayChieuGioChieu}</TableCell>
    //             </TableRow>
    //         );
    //     });
    // }
    // c2 (optional chaining)
    return showTimeList?.map((showTime, index) => {
      return (
        <TableRow key={index}>
          <TableCell component="th" scope="row">
            {index + 1}
          </TableCell>
          <TableCell>{showTime.thongTinRap.tenHeThongRap}</TableCell>
          <TableCell>{showTime.thongTinRap.tenCumRap}</TableCell>
          <TableCell>{showTime.giaVe}</TableCell>
          <TableCell>
            <Link to={`/booking/${showTime.maLichChieu}`}>
                {format("MM/dd/yy hh:mm", new Date(showTime.ngayChieuGioChieu))}
            </Link>
          </TableCell>
        </TableRow>
      );
    });
  };

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Số thứ tự</TableCell>
            <TableCell>Tên hệ thống rạp</TableCell>
            <TableCell>Tên cụm rạp</TableCell>
            <TableCell>Giá vé</TableCell>
            <TableCell>Ngày chiếu giờ chiếu</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>{renderShowTimeList()}</TableBody>
      </Table>
    </TableContainer>
  );
}
