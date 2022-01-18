import "./styles.css";
import Todo from "./Todo/Todo";
import Login from "./Login/Login";
import { useSelector } from "react-redux";
export default function App() {
  const isAuth = useSelector((state) => state.isAuth);
  return isAuth ? (
    <div className="App">
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
