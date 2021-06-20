import { Button, Container, Grid } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteAdminAction,
  deleteSearchAction,
  getListAdminAction,
  getListAdminPageAction,
  searchAdminAction,
  searchAdminPageAction,
} from "../../store/action/admin.action";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { useHistory, NavLink } from "react-router-dom";
import TransitionsModal from "./modal";





const useStyles = makeStyles((theme) => ({
  table: {
    minWidth: 650,
  },
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

function Admin() {
  const classes = useStyles();
  const dispatch = useDispatch();

  const [page, setPage] = useState(1);
  const [pageSearch, setPageSearch] = useState(1);
  const [choice, setChoice] = useState(true);
  const history = useHistory();
  const [open, setOpen] = React.useState(false);

  // useEffect(() => {
  //   dispatch(getListAdminAction());
  // }, [dispatch]);

  useEffect(() => {
    dispatch(getListAdminPageAction(page));
  }, [dispatch]);

  //   useEffect(() => {
  //     dispatch(searchAdminPageAction(pageSearch));
  //   }, [dispatch]);

  const listAdminPage = useSelector((state) => {
    return state.admin.listAdminPage.items;
  });
  //   console.log("listAdminPage", listAdminPage);
  const renderListAdminPage = () => {
    return listAdminPage?.map((item, index) => {
      return (
        <TableRow key={index}>
          <TableCell>{index + 1}</TableCell>
          <TableCell>{item.taiKhoan}</TableCell>
          <TableCell>{item.matKhau}</TableCell>
          <TableCell>{item.hoTen}</TableCell>
          <TableCell>{item.email}</TableCell>
          <TableCell>{item.soDt}</TableCell>
          <TableCell>
            <Grid container>
              <Grid item md={6}>
                <Button
                  onClick={() => {
                    handleDelete(item.taiKhoan);
                  }}
                >
                  Xoá
                </Button>
              </Grid>
              <Grid item md={6}>
                <Button onClick={() => handleUpdate(item.taiKhoan)}>
                  Cập nhật
                </Button>
              </Grid>
            </Grid>
          </TableCell>
        </TableRow>
      );
    });
  };

  const handleUpdate = (taiKhoan) => {
    const open1 = setOpen(true);
    <TransitionsModal open1={open1}/>
  }


  const handleNext = () => {
    setPage(page + 1);
  };

  const handlePrev = () => {
    setPage(page - 1);
  };

  useEffect(() => {
    dispatch(getListAdminPageAction(page));
  }, [page]);

  const renderButtonPage = () => {
    return (
      <div>
        {page > 1 ? <Button onClick={handlePrev}>Prev</Button> : ""}
        <p>{page}</p>
        <Button onClick={handleNext}>Next</Button>
      </div>
    );
  };

  //   ----------------------------------------------------

  const [keyword, setKeyword] = useState({
    keyword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    //   console.log(name, value);

    setKeyword({
      ...keyword,
      value,
    });
  };

  const listSearchPage = useSelector((state) => {
    return state.admin.listSearchPage.items;
  });
  //   console.log("listSearchPage", listSearchPage);

  const renderListSearch = () => {
    return listSearchPage?.map((item, index) => {
      return (
        <TableRow key={index}>
          <TableCell>{index + 1}</TableCell>
          <TableCell>{item.taiKhoan}</TableCell>
          <TableCell>{item.matKhau}</TableCell>
          <TableCell>{item.hoTen}</TableCell>
          <TableCell>{item.email}</TableCell>
          <TableCell>{item.soDt}</TableCell>
          <TableCell>
            <Grid container>
              <Grid item md={6}>
                <Button
                  onClick={() => {
                    handleDeleteSearch(item.taiKhoan);
                  }}
                >
                  Xoá
                </Button>
              </Grid>
              <Grid item md={6}>
                <Button>
                  <NavLink
                    to="/admin-update"
                    style={{ textDecoration: "none", color: "#000" }}
                  >
                    <Typography>Cập nhật tài khoản</Typography>
                  </NavLink>
                </Button>
              </Grid>
            </Grid>
          </TableCell>
        </TableRow>
      );
    });
  };
  const handlePrevSearch = () => {
    setPageSearch(pageSearch - 1);
  };
  const handleNextSearch = () => {
    setPageSearch(pageSearch + 1);
  };
  useEffect(() => {
    dispatch(searchAdminPageAction(keyword.value, pageSearch));
  }, [pageSearch]);

  const handleSearch = () => {
    if (keyword.value !== "") {
      setChoice(false);
    } else {
      setChoice(true);
    }
    dispatch(searchAdminPageAction(keyword.value, pageSearch));
  };
  //   console.log(pageSearch);
  const renderButtonSearchPage = () => {
    return (
      <div>
        {pageSearch > 1 ? (
          <Button onClick={handlePrevSearch}>SPrev</Button>
        ) : (
          ""
        )}
        <p>{pageSearch}</p>
        <Button onClick={handleNextSearch}>SNext</Button>
      </div>
    );
  };
  //   -----------------------------------------------

  const handleDelete = (taiKhoan) => {
    // console.log(taiKhoan);
    dispatch(deleteAdminAction(taiKhoan));
  };

  const handleDeleteSearch = (taiKhoan) => {
    dispatch(deleteSearchAction(taiKhoan));
  };

  return (
    <div>
      <h1>Admin</h1>
      <Container>
        <Button>Thêm người dùng</Button>
        <br />
        <Grid container>
          <Grid item md={8}>
            <TextField
              fullWidth
              id="outlined-basic"
              label="Nhập tên tài khoản người dùng"
              variant="outlined"
              onChange={handleChange}
              name="keyword"
            />
          </Grid>
          <Grid item md={4}>
            <Button onClick={handleSearch}>Tìm</Button>
          </Grid>
        </Grid>
        <hr />
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>STT</TableCell>
                <TableCell>Tài khoản</TableCell>
                <TableCell>Mật khẩu</TableCell>
                <TableCell>Họ tên</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Số điện thoại</TableCell>
                <TableCell>Thao tác</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {/* {renderListAdminPage()} */}
              {choice ? renderListAdminPage() : renderListSearch()}
            </TableBody>
          </Table>
        </TableContainer>
        {choice ? renderButtonPage() : renderButtonSearchPage()}
        
      </Container>
    </div>
  );
}

export default Admin;
