import logo from "./logo.svg";
import "./App.css";
import Home from "./pages/home/home.page";
import MovieDetail from "./pages/movie-detail/movie-detail.page";
import SignIn from './pages/sign-in/sign-in.page'
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Header from "./components/header/header.component";
import SignUp from "./pages/sign-up/sign-up.page";
import Booking from "./pages/booking/booking.page";
import DemoHook from "./pages/demo-hook/demo-hook.page";
import Admin from "./pages/admin/admin.page";
import Guard from "./HOC/guard.hoc";
import User from "./pages/user/user.page";
import GuardUser from "./HOC/guard.user";
import UserUpdatePage from "./pages/user/user.update.page";
import GuardAdmin from "./HOC/guard.admin";
import AdminUpdatePage from "./pages/admin/admin.update.page";



function App() {
  return (
    <>
      <BrowserRouter>
        <Header/>
        <Switch>
          {/* path="/" === https://localhost:3000/ */}
          <Route path="/" exact={true}>
            <Home />
          </Route>
          <Route path="/movie-detail/:movieCode" exact={true}>
            <MovieDetail />
          </Route>
          <Route path="/sign-in" exact={true}>
            <SignIn />
          </Route>
          <Route path="/sign-up" exact={true}>
            <SignUp />
          </Route>
          <Route path="/booking/:showTimeCode" exact={true}>
            <Booking />
          </Route>
          <Route path="/demo-hook" exact={true}>
            <DemoHook />
          </Route>

          <Route path="/admin">
            <Guard>
              <Admin />
            </Guard>
          </Route>
          <Route path="/user" exact={true}>
            <GuardUser>
              <User />
            </GuardUser>
          </Route>
          <Route path="/user-update" exact={true}>
            <GuardUser>
              <UserUpdatePage/>
            </GuardUser>
          </Route>
          <Route path="/admin-update" exact={true}>
            <GuardAdmin>
              <AdminUpdatePage />
              
            </GuardAdmin>
          </Route>


          {/* xử lý Not Found */}
          <Route path="">
            {/* <h1>404 Not Found</h1> */}
            <Redirect to="/" />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
