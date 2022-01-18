import "./styles.css";
import Todo from "./Todo/Todo";
import Login from "./Login/Login";
import { shallowEqual, useSelector } from "react-redux";
export default function App() {
  // const isAuth2 = useSelector(
  //   (state) => ({ isAuth: state.isAuth, token: state.token }),
  //   shallowEqual
  // );
  // or
  const isAuth = useSelector((state) => state.isAuth);
  const token = useSelector((state) => state.token);

  return isAuth ? (
    <div className="App">
      <h3>User Token : {token}</h3>
      <h1>Todo</h1>
      <Todo />
    </div>
  ) : (
    <Login />
  );
}

// Network Request?
// two outcomes success or failure
// we need to show loading(activity indicator) => since we will using network request

// Part of this app
// working with localStorage
// Working with multiple reducers/combined reducers
// working with dev tools
// midddlewares

// this is not the recommended because this will re-render the app every single time.
// const {isAuth,token} = useSelector((state)=>state);
