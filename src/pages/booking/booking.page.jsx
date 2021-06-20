import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Swal from "sweetalert2";
import { useDispatch } from "react-redux";
import {
  bookingTicketAction,
  choiceChairAction,
  getTicketListAction,
} from "../../store/action/booking.actions";
import { useSelector } from "react-redux";
import { Button } from "@material-ui/core";
import { useParams } from "react-router-dom";


const useStyles = makeStyles({
  choiceChair: {
    backgroundColor: "#6645fd",
    "&:hover": {
      backgroundColor: "#6645fd",
    },
  },
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


function Booking() {
  const classes = useStyles();
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  // lấy listChair = useSelector
  const listChair = useSelector((state) => {
    return state.booking.listChair;
  });

  const { showTimeCode } = useParams();

  // componentDidMount
  useEffect(async () => {
    await dispatch(getTicketListAction(showTimeCode));
    setLoading(false);
  }, [loading]);

  //disable
  const [isValid, setIsValid] = useState(true);
  const chairDangChon = listChair.filter(chair => chair.dangChon);
  useEffect(() => {
    if(chairDangChon.length > 0) {
      setIsValid(false);
    } else {
      setIsValid(true);
    }
  }, [chairDangChon])

  const handleChoice = (chair) => {
    dispatch(choiceChairAction(chair));
  };

  const handleBooking = () => {
    const listChairChoice = listChair.filter((chair) => chair.dangChon);
    dispatch(bookingTicketAction(showTimeCode, listChairChoice));
    Swal.fire({
      icon: 'success',
      title: 'Đặt ghế thành công',
    })
  };

  const renderListChair = () => {
    return listChair?.map((chair, index) => {
      return (
        <Button
          className={chair.dangChon ? classes.choiceChair : ""}
          onClick={() => handleChoice(chair)}
          disabled={chair.daDat}
          variant="contained"
          color={chair.daDat ? "primary" : "secondary"}
          key={index}
        >
          {chair.tenGhe}
        </Button>
      );
    });
  };

  const renderTable = () => {
    return listChair?.map((chair, index) => {
      if (chair.dangChon) {
        return (
          <TableRow key={index}>
            <TableCell>{chair.maGhe}</TableCell>
            <TableCell>{chair.tenGhe}</TableCell>
            <TableCell>{chair.maRap}</TableCell>
            <TableCell>{chair.loaiGhe}</TableCell>
            <TableCell>{chair.giaVe}</TableCell>
          </TableRow>
        );
      }
    });
  };

  return (
    <div>
      <h1>Booking</h1>
      <div>
        <div>
          <section>{loading ? "Loading..." : renderListChair()}</section>
        </div>
        <div>
          <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Mã ghế</TableCell>
                  <TableCell>Tên ghế</TableCell>
                  <TableCell>Mã rạp</TableCell>
                  <TableCell>Loại ghế</TableCell>
                  <TableCell>Giá vé</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {renderTable()}
                <TableRow>
                  <TableCell>Tổng cộng</TableCell>
                  <TableCell colSpan="3"></TableCell>
                  <TableCell>
                    {listChair
                      .filter((chair) => chair.dangChon)
                      .reduce(
                        (tongTien, chair) => (tongTien += chair.giaVe),
                        0
                      )}
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>
      <div style={{ textAlign: "center", margin: "30px" }}>
        <Button
          disabled={isValid}
          onClick={handleBooking}
          variant="contained"
          color="primary"
          size="large"
        >
          Booking
        </Button>
      </div>
    </div>
  );
}

export default Booking;
