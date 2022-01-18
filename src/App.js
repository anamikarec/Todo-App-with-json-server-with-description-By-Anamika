import "./styles.css";
import Todo from "./Todo/Todo";

export default function App() {
  return (
    <div className="App">
      <h1>Todo</h1>
      <Todo />
    </div>
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
